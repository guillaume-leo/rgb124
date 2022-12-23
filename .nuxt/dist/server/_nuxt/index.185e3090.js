import { u as useVideoStore } from "./videos.018fbbcb.js";
import { _ as _export_sfc, s as storeToRefs } from "../server.mjs";
import { unref, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const index_vue_vue_type_style_index_0_scoped_a3f55645_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const videosState = useVideoStore();
    const { videos } = storeToRefs(videosState);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-a3f55645><!--[-->`);
      ssrRenderList(unref(videos), ({ VIDEO_ID, TITLE, DESCRIPTION }) => {
        _push(`<section class="project"${ssrRenderAttr("id", "project_" + VIDEO_ID)} data-v-a3f55645><h1 class="project__title" data-v-a3f55645>${ssrInterpolate(TITLE)}</h1><p class="project__description" data-v-a3f55645>${ssrInterpolate(DESCRIPTION)}</p><iframe${ssrRenderAttr("src", "https://player.vimeo.com/video/" + VIDEO_ID + "?h=dc400081cd&title=0&byline=0&portrait=0")} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen data-v-a3f55645></iframe></section>`);
      });
      _push(`<!--]--></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3f55645"]]);
export {
  index as default
};
//# sourceMappingURL=index.185e3090.js.map
