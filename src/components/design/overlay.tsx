import { component$, Slot } from "@builder.io/qwik";

export const Overlay = component$(() => (
  <div class="pad grid center">
    <Slot />
  </div>
));
