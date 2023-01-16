import { component$, useClientEffect$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { ProfilePicture } from "~/components/design/profile-picture";
import Title from "@/content/title.md?inline";
import Toc from "@/content/toc.md?inline";
import Info from "@/content/info.md?inline";
import AboutMe from "@/content/about-me.md?inline";
import DeveloperCareer from "@/content/developer-career.mdx?inline";
import Skills from "@/content/skills.mdx?inline";
import Channels from "@/content/channels.md?inline";
import ThemeSwitch from "@/content/theme-switch.md?inline";
import { getTheme } from "~/utils/getTheme";

export default component$(() => {
  const loc = useLocation();
  const theme = getTheme(loc.params);

  return (
    <div class={theme}>
      <div class="cover pad grid center">
        <ProfilePicture />
        <Title />
        <Toc />
        <ThemeSwitch />
      </div>
      <div class="pad grid center">
        <hr style="width: 80vw" />
        <div class="width">
          <Info />
        </div>
        <hr id="about-me" />
        <div class="width">
          <AboutMe />
        </div>
        <hr id="developer-career" />
        <div class="width">
          <DeveloperCareer />
        </div>
        <hr id="skills" />
        <div class="width">
          <Skills />
        </div>
        <hr id="channels" />
        <div class="width">
          <Channels />
        </div>
      </div>
      <hr style="width: 80vw" />
      <div style="height: 30vh"></div>
    </div>
  );
});
