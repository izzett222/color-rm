import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "convex/_generated/server";

export const getRoadmapSections = query({
  args: { roadmapId: v.id("roadmaps") },
  handler: async (ctx, { roadmapId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const roadmap = await ctx.db.get(roadmapId);
    if (!roadmap) {
      throw new Error("Roadmap not found");
    }
    return await ctx.db
      .query("roadmapSections")

      .filter((q) => q.eq(q.field("roadmapId"), roadmap._id))
      .collect();
  },
});
