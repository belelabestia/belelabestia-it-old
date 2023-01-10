import { component$, Slot } from "@builder.io/qwik";

type Props = {
  onClick$: () => void;
};

export const Button = component$((props: Props) => (
  <button class="button pad" onClick$={props.onClick$}>
    <Slot />
  </button>
));
