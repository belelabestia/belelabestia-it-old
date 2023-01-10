import { component$, Slot } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { navigate } from "~/routes/layout";
import { Button } from "../button";
import { Overlay } from "../overlay";

/**
 * this must be suitable for print.
 * just content with maybe a TOC on top of the document.
 * white background and black font.
 */
export const PrintLayout = component$(() => {
  const nav = useNavigate();

  return (
    <div class="print grid center">
      <div class="pad width">
        <Slot />
        <Overlay>
          <div class="bottom pad">
            <Button onClick$={() => navigate(nav, "/web")}>
              See on device
            </Button>
          </div>
        </Overlay>
      </div>
    </div>
  );
});
