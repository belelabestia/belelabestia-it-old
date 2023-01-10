import {
  Component,
  component$,
  Signal,
  Slot,
  useClientEffect$,
  useSignal,
} from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { navigate } from "~/routes/layout";
import { Button } from "../button";
import { Overlay } from "../overlay";
import { DesktopLayout } from "./desktop-layout";
import { MobileLayout } from "./mobile-layout";

type LayoutType = "Mobile" | "Desktop" | undefined;

/**
 * this component will observe the screen size
 * and select mobile or desktop layout.
 */
export const WebLayout = component$(() => {
  const nav = useNavigate();
  const type = useSignal<LayoutType>();
  const Layout = getLayout(type.value);

  useClientEffect$(() => bindMedia(type));

  return (
    <div class="web text background">
      <Layout>
        <Slot />
        <Overlay>
          <div class="bottom pad">
            <Button onClick$={() => navigate(nav, "/print")}>
              See printable
            </Button>
          </div>
        </Overlay>
      </Layout>
    </div>
  );
});

export const getLayoutType = (
  mql: MediaQueryList | MediaQueryListEvent
): LayoutType => (mql.matches ? "Mobile" : "Desktop");

export const getLayout = (type: LayoutType): Component<{}> =>
  type === "Mobile" ? MobileLayout : DesktopLayout;

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
