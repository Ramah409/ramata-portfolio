/// <reference types="vite/client" />

// Declare les imports d'assets generes depuis Figma pour TypeScript.
declare module "figma:asset/*" {
  const src: string;
  export default src;
}
