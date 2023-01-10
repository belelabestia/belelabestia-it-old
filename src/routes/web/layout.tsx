import { component$, Slot } from "@builder.io/qwik";
import { WebLayout } from "@/design/layout/web-layout";

export default component$(() => (
  <WebLayout>
    <Slot />
  </WebLayout>
));
