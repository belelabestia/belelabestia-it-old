import { component$, Slot } from "@builder.io/qwik";
// import { Toc } from "~/components/toc";
// import { Picture } from "../picture";

/**
 * this is inspired from the GH profile:
 * profile picture and navigation menu on the left,
 * and contents in the center-right.
 */
export const DesktopLayout = component$(() => (
  <div class="grid center">
    <div class="pad width">
      DESKTOP
      <Slot />
    </div>
  </div>
));
