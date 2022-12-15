import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(_attrs)}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis!</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis!</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis!</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis!</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, debitis quibusdam! Alias corporis enim, aspernatur praesentium illo sequi, qui eos fugiat quis aliquam iste pariatur laudantium cum. Non, illo exercitationem.</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis!</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. In earum ab aliquid consectetur, sed architecto laboriosam est magni dolorum molestiae id veritatis omnis assumenda illo quam quisquam provident tenetur. Accusantium.</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum doloremque unde dolore totam sed, recusandae rerum? Architecto quod officia, doloribus facilis omnis ut similique illum sequi, sint nostrum dolorum?</p><br><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet, libero et ab dicta omnis dolorem. Quisquam fuga culpa modi commodi in voluptatibus assumenda, alias aliquid consequatur ea facere blanditiis!</p><br></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.2c987d52.js.map
