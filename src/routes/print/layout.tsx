import { component$, Slot } from "@builder.io/qwik";
import { PrintLayout } from "~/components/design/layout/print-layout";

export default component$(() => (
  <PrintLayout>
    <Slot />
  </PrintLayout>
));
