import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

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
