import { RouteParams } from "@builder.io/qwik-city";

export const getTheme = (query: RouteParams): "theme dark" | "theme light" =>
  query["theme"] == "light" ? "theme light" : "theme dark";
