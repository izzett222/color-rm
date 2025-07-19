import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
const schema = defineSchema({
  ...authTables,
  profiles: defineTable({
    userId: v.id("users"),
    displayName: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
    skills: v.array(v.string()),
    profession: v.optional(v.string()),
    location: v.optional(v.string()),
    bio: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    github: v.optional(v.string()),
    linkedin: v.optional(v.string()),
    createdAt: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
  })
});
 
export default schema;