import esbuild from "esbuild";
import { builtinModules as external } from "module";

esbuild
  .build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    platform: "node",
    format: "esm",
    outfile: "dist/main.js",
    sourcemap: true,
    minify: false,
    external,
    packages: "external",
  })
  .catch(() => process.exit(1));
