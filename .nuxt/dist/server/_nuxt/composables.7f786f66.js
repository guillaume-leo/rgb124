import { b as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
export {
  useHead as u
};
//# sourceMappingURL=composables.7f786f66.js.map
