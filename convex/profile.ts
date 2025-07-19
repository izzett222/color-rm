import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const getProfile = query({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity || !identity.email) return null;
    // Find the user in the users table by email
    const users = await ctx.db.query("users").collect();
    const currentUser = users.find(u => u.email === identity.email);
    if (!currentUser) return null;
    // Find the profile by userId
    const profiles = await ctx.db.query("profiles").collect();
    const profile = profiles.find(p => p.userId === currentUser._id);
    return profile;
  },
});

export const updateProfile = mutation({
  args: {
    displayName: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
    skills: v.optional(v.array(v.string())),
    profession: v.optional(v.string()),
    location: v.optional(v.string()),
    bio: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity || !identity.email) throw new Error("Not authenticated");
    // Find the user in the users table by email
    const users = await ctx.db.query("users").collect();
    const currentUser = users.find(u => u.email === identity.email);
    if (!currentUser) throw new Error("User not found");
    // Find the profile by userId
    const profiles = await ctx.db.query("profiles").collect();
    const profile = profiles.find(p => p.userId === currentUser._id);
    if (!profile) throw new Error("Profile not found");
    await ctx.db.patch(profile._id, {
      displayName: args.displayName,
      avatarUrl: args.avatarUrl,
      skills: args.skills,
      profession: args.profession,
      location: args.location,
      bio: args.bio,
      updatedAt: Date.now(),
    });
    return true;
  },
}); 