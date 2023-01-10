import { component$, Slot } from "@builder.io/qwik";

/**
 * this must be suitable for print.
 * just content with maybe a TOC on top of the document.
 * white background and black font.
 */
export const PrintLayout = component$(() => (
  <div class="grid center">
    <div class="pad width">
      <Slot />
    </div>
  </div>
));
