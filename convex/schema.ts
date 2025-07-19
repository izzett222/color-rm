import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  roadmaps: defineTable({
    userId: v.id("users"),
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
  }),
  roadmapSections: defineTable({
    title: v.string(),
    description: v.string(),
    roadmapId: v.id("roadmaps"),
    link: v.string(),
    type: v.union(v.literal("video"), v.literal("text")),
    difficulty: v.union(
      v.literal("beginner"),
      v.literal("intermediate"),
      v.literal("advanced")
    ),
    time: v.number(), // Use v.number() for time in seconds or minutes as appropriate
  }),
});

export default schema;
