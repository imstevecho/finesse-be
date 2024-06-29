// import type { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   schema: "schema.graphql",
//   documents: ["./src/**/*.tsx"],
//   generates: {
//     "./resolvers-types.ts": {
//       config: {
//         useIndexSignature: true,
//       },
//       plugins: ["typescript", "typescript-resolvers"],
//     },
//   },
// };

// export default config;

import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "src/graphql/schema.graphql",
  generates: {
    "src/graphql/generated": defineConfig(),
  },
};
export default config;
