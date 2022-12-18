import { component$ } from "@builder.io/qwik";

/**
 * this component will observe the screen size
 * and select landscape or portrait layout.
 */
export const WebLayout = component$(() => {
  return (
    <div>
      <pre>Web layout</pre>
    </div>
  );
});
