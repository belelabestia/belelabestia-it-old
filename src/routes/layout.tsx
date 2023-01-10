import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Overlay } from "~/components/design/overlay";

export const head: DocumentHead = {
  title: "Marco Bellezza - full-stack dev",
  meta: [
    {
      name: "description",
      content: "Personal and professional site of Marco Bellezza",
    },
  ],
};

export default component$(() => {
  const nav = useNavigate();

  return (
    <div>
      <Slot />
      <Overlay>
        <div class="bottom">
          <button onClick$={() => navigate(nav, "/web")}>Web</button>
          <button onClick$={() => navigate(nav, "/print")}>Print</button>
        </div>
      </Overlay>
    </div>
  );
});

export const navigate = (nav: ReturnType<typeof useNavigate>, path: string) => {
  nav.path = path;
};
