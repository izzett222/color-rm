import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("profile", "routes/profile.tsx"),
  route("/login", "routes/login.tsx"),
  route("/signup", "routes/signup.tsx"),
  route("/roadmap", "routes/roadmap/index.tsx", [
    route("/roadmap/update/:roadmapId", "routes/roadmap/update.tsx")
  ]),
] satisfies RouteConfig;
