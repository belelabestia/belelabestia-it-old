import { RouteParams } from "@builder.io/qwik-city";

export const getTheme = (query: RouteParams): "dark" | "light" =>
  query["theme"] == "light" ? "light" : "dark";
