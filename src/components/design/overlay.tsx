import { component$, Slot } from "@builder.io/qwik";

export const Overlay = component$(() => (
  <div class="overlay grid center">
    <Slot />
  </div>
));
