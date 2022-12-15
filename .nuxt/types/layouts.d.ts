import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}