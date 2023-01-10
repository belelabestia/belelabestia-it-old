import { component$, Slot } from "@builder.io/qwik";

/**
 * this is for mobile devices;
 * a sticky bar on top and contents in the whole view.
 * maybe a floating button that opens
 * a floating menu instead of the classic navbar.
 */
export const MobileLayout = component$(() => (
  <div class="grid center">
    <div class="pad width">
      MOBILE
      <Slot />
    </div>
  </div>
));
