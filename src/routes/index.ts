import { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
  throw request.response.redirect("/web/");
};
