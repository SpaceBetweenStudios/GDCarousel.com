import type { FontAwesomeIconProps, FontAwesomeLayersProps, FontAwesomeLayersTextProps } from '@fortawesome/vue-fontawesome'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  export interface GlobalComponents {
    Icon: DefineComponent<Partial<FontAwesomeIconProps>>,
    IconLayers: DefineComponent<Partial<FontAwesomeLayersProps>>,
    IconLayersText: DefineComponent<Partial<FontAwesomeLayersTextProps>>,
  }
}
