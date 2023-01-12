import { component$ } from "@builder.io/qwik";
import Title from "@/content/title.md?inline";
import Info from "@/content/info.md?inline";
import AboutMe from "@/content/about-me.md?inline";
import DeveloperCareer from "@/content/developer-career.mdx?inline";
import Skills from "@/content/skills.mdx?inline";
import Channels from "@/content/channels.md?inline";
import { ProfilePicture } from "~/components/design/profile-picture";

export default component$(() => {
  return (
    <div class="modular">
      <ProfilePicture />
      <Title />
      <Info />
      <AboutMe />
      <DeveloperCareer />
      <Skills />
      <Channels />
    </div>
  );
});
