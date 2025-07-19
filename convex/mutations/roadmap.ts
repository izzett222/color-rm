import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation } from "convex/_generated/server";
import { ConvexError, v } from "convex/values";

export const createRoadmap = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    const roadmapId = await ctx.db.insert("roadmaps", {
      userId,
      title: args.title,
      description: args.description,
      tags: args.tags,
    });
    return roadmapId;
  },
});

export const createRoadmapSection = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    roadmapId: v.id("roadmaps"),
    link: v.string(),
    type: v.union(v.literal("video"), v.literal("text")),
    time: v.number(),
  },
  handler: async (ctx, args) => {
    // 1. Check user authentication
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new ConvexError("Unauthenticated call to mutation");
    }

    // 3. Check that the roadmap belongs to the current user
    const roadmap = await ctx.db.get(args.roadmapId);
    if (!roadmap || roadmap.userId !== userId) {
      throw new ConvexError("Unauthorized: Roadmap does not belong to user");
    }

    // 4. Insert the roadmap section
    return await ctx.db.insert("roadmapSections", {
      title: args.title,
      description: args.description,
      roadmapId: args.roadmapId,
      link: args.link,
      type: args.type,
      time: args.time,
    });
  },
});
