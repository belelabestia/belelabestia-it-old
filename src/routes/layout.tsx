import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Overlay } from "~/components/design/overlay";

export default component$(() => (
  <div>
    <Slot />
    <Overlay>
      <button class="bottom">Switch</button>
    </Overlay>
  </div>
));

export const head: DocumentHead = {
  title: "Marco Bellezza - full-stack dev",
  meta: [
    {
      name: "description",
      content: "Personal and professional site of Marco Bellezza",
    },
  ],
};
