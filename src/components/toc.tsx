import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import CV from "@/cv.md?inline";

type TocTree = {
  level: number;
  text: string;
  link: string;
  children: TocTree | null;
}[];

export const Headings = ["H2", "H3", "H4", "H5", "H6"];

export const Toc = component$(() => {
  const ref = useSignal<Element>();
  const toc = useSignal<TocTree>();

  useTask$(({ track }) => {
    track(ref);

    if (ref.value === undefined) return;

    const headings = [...ref.value.querySelectorAll("h2, h3, h4, h5, h6")];

    const h2s = headings.filter((h) => h.tagName === "H2");

    toc.value = h2s.map((h, i) => ({
      level: Headings.indexOf(h.tagName),
      text: h.textContent ?? "",
      link: "#" + h.id,
      children: headings
        .filter(
          (_h, _i) =>
            _h.tagName === "H3" &&
            _i > headings.indexOf(h2s[i]) &&
            _i < headings.indexOf(h2s[i + 1])
        )
        .map((h) => ({
          level: Headings.indexOf(h.tagName),
          text: h.textContent ?? "",
          link: "#" + h.id,
          children: null,
        })),
    }));

    ref.value.innerHTML = "";
  });

  return (
    <>
      <div ref={ref}>
        <CV />
      </div>
      <ul>
        {toc.value?.map((h) => (
          <li>
            <a href={h.link}>{h.text}</a>
            {h.children === null ? (
              <></>
            ) : (
              <ul>
                {h.children?.map((h) => (
                  <li>
                    <a href={h.link}>{h.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
});
