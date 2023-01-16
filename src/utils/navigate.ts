import { useNavigate } from "@builder.io/qwik-city";

export const navigate = (nav: ReturnType<typeof useNavigate>, path: string) => {
  nav.path = path;
};
