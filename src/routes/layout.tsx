import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Overlay } from "~/components/design/overlay";

export default component$(() => {
  const nav = useNavigate();
  return (
    <div>
      <Slot />
      <Overlay>
        <button
          class="bottom"
          onClick$={() => {
            // location.href = "/web";
            nav.path = "/web";
          }}
        >
          Web
        </button>
        <button
          class="bottom"
          onClick$={() => {
            // location.href = "/print";
            nav.path = "/print";
          }}
        >
          Print
        </button>
      </Overlay>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Marco Bellezza - full-stack dev",
  meta: [
    {
      name: "description",
      content: "Personal and professional site of Marco Bellezza",
    },
  ],
};
