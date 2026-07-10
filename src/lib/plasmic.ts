import { initPlasmicLoader } from "@plasmicapp/loader-react";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: import.meta.env.PLASMIC_PROJECT_ID || "placeholder",
      token: import.meta.env.PLASMIC_PROJECT_TOKEN || "placeholder"
    }
  ],
  preview: true, // Loads draft pages so editors see live changes before publishing
});
