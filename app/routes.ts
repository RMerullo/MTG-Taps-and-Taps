import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
    route("newplayer", "./newplayer/newplayer.tsx"),
    route("gamescore", "./gamescore/gamescore.tsx"),
    route("leaderboard", "./leaderboard/leaderboard.tsx"),
    route("homepage", "./homepage/homepage.tsx")] satisfies RouteConfig;
