import { component$ } from "@builder.io/qwik";
import CV from "@/content/cv.mdx?inline";

export default component$(() => {
  return (
    <div class="modular">
      <CV />
    </div>
  );
});
