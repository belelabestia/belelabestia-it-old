import { component$ } from "@builder.io/qwik";
import { ProfilePicture } from "~/components/design/profile-picture";
import Title from "@/content/title.md?inline";
import Toc from "@/content/toc.md?inline";
import Info from "@/content/info.md?inline";
import AboutMe from "@/content/about-me.md?inline";
import DeveloperCareer from "@/content/developer-career.mdx?inline";
import Skills from "@/content/skills.mdx?inline";
import Channels from "@/content/channels.md?inline";

export default component$(() => {
  return (
    <div class="web background text">
      <div class="cover pad grid center">
        <ProfilePicture />
        <Title />
        <Toc />
      </div>
      <div class="pad grid center">
        <hr />
        <div class="width">
          <Info />
        </div>
        <hr />
        <div class="width">
          <AboutMe />
        </div>
        <hr />
        <div class="width">
          <DeveloperCareer />
        </div>
        <hr />
        <div class="width">
          <Skills />
        </div>
        <hr />
        <div class="width">
          <Channels />
        </div>
      </div>
      <hr />
      <div style="height: 30vh"></div>
    </div>
  );
});
