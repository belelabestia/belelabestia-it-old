import { component$, Slot } from "@builder.io/qwik";

export const Cover = component$(() => {
  return (
    <div class="cover pad">
      <Slot />
    </div>
  );
});
