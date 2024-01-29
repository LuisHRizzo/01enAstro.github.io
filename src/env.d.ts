/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ORIGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export {}

declare global {
  interface Window {
    particlesInit: any
  }
}
