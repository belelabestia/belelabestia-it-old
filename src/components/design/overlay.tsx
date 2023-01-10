import { component$, Slot } from "@builder.io/qwik";

export const Overlay = component$(() => (
  <div class="overlay pad grid center">
    <Slot />
  </div>
));
