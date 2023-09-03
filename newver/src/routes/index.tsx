import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
  throw request.redirect(308, "/dark/");
};
