/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GAV4: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
