import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const head: DocumentHead = {
  title: "Marco Bellezza - full-stack dev",
  meta: [
    {
      name: "description",
      content: "Personal and professional site of Marco Bellezza",
    },
  ],
};

export default component$(() => <Slot />);
