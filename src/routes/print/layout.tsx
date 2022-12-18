import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import printStyle from "./print.css?inline";

export default component$(() => {
  useStyles$(printStyle);

  return (
    <div class="grid center">
      <div class="width print pad font">
        <Slot />
      </div>
    </div>
  );
});
