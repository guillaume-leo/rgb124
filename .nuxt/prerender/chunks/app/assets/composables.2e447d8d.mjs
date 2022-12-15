import { b as useNuxtApp } from '../server.mjs';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}

export { useHead as u };
//# sourceMappingURL=composables.2e447d8d.mjs.map
