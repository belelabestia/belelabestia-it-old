import { component$, Slot } from "@builder.io/qwik";
import { ProfilePicture } from "../profile-picture";
// import { Toc } from "~/components/toc";
// import { Picture } from "../picture";

/**
 * this is inspired from the GH profile:
 * profile picture and navigation menu on the left,
 * and contents in the center-right.
 */
export const DesktopLayout = component$(() => (
  <div class="grid center main-with-sides">
    <div class="pad top">
      <ProfilePicture />
    </div>
    <div class="pad width">
      <Slot />
    </div>
  </div>
));
