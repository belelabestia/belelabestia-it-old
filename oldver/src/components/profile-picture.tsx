import { component$ } from "@builder.io/qwik";

export const ProfilePicture = component$(() => {
  return (
    <div class="image">
      <img src="/profile-pic.jpg" alt="Profile picture" />
    </div>
  );
});
