import { component$ } from "@builder.io/qwik";
import ProfilePic from "~/media/profile-pic.jpg?jsx";

export const ProfilePicture = component$(() =>
  <div class="image">
    <ProfilePic />
  </div>
);
