import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}