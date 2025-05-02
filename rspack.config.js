// @ts-check

import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import { defineConfig } from "@rspack/cli";

export default defineConfig({
  entry: {
    main: "./src/index.js",
  },
  target: "node",
  mode: "development",
  ignoreWarnings: [
    (warning) => {
      console.log(
        "WARNING of type",
        warning.constructor.name,
        `(${warning instanceof Error ? "" : "NOT "}a subclass of Error)`
      );
      console.log(warning);
      console.log();
      return true;
    },
  ],
  plugins: [
    ...(process.env.RSDOCTOR === "true" ? [new RsdoctorRspackPlugin()] : []),
  ],
  output: {
    clean: true,
  },
});
