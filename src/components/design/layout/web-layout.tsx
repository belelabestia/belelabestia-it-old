import {
  Component,
  component$,
  Signal,
  Slot,
  useClientEffect$,
  useSignal,
} from "@builder.io/qwik";
import { DesktopLayout } from "./desktop-layout";
import { MobileLayout } from "./mobile-layout";

type LayoutType = "Mobile" | "Desktop" | undefined;

/**
 * this component will observe the screen size
 * and select landscape or portrait layout.
 */
export const WebLayout = component$(() => {
  const type = useSignal<LayoutType>();
  const Layout = getLayout(type.value);

  useClientEffect$(() => bindMedia(type));

  return (
    <div class="web text background">
      <Layout>
        <Slot />
      </Layout>
    </div>
  );
});

export const getLayoutType = (
  mql: MediaQueryList | MediaQueryListEvent
): LayoutType => (mql.matches ? "Mobile" : "Desktop");

export const getLayout = (type: LayoutType): Component<{}> =>
  type === "Mobile"
    ? MobileLayout
    : type === "Desktop"
    ? DesktopLayout
    : () => <></>;

export const bindMedia = (type: Signal<LayoutType>) => {
  const mql = matchMedia("(max-width: 70rem)");

  type.value = getLayoutType(mql);

  const listener = (e: MediaQueryListEvent) => {
    type.value = getLayoutType(e);
  };

  mql.addEventListener("change", listener);

  return () => {
    mql.removeEventListener("change", listener);
  };
};
