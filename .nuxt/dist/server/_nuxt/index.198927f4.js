import { useSSRContext, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { vIntersectionObserver } from "@vueuse/components";
import "@vimeo/player";
import { _ as _export_sfc, s as storeToRefs } from "../server.mjs";
import { u as useVideoStore } from "./videos.018fbbcb.js";
import "destr";
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
const videoPlayer_vue_vue_type_style_index_0_scoped_fc4255ad_lang = "";
const _sfc_main$1 = {
  __name: "videoPlayer",
  __ssrInlineRender: true,
  props: {
    url: Number,
    linkText: String
  },
  setup(__props) {
    const props = __props;
    let video = null;
    const onIntersectionObserver = (evt) => {
      const isVisible = evt[0].isIntersecting;
      if (isVisible) {
        video.play();
      } else {
        video.pause();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: props.url,
        class: "v-player"
      }, _attrs, ssrGetDirectiveProps(_ctx, unref(vIntersectionObserver), onIntersectionObserver)))} data-v-fc4255ad><div class="title" data-v-fc4255ad><p data-v-fc4255ad>${ssrInterpolate(props.linkText)}</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/phone/videoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fc4255ad"]]);
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const videosState = useVideoStore();
    const { videos, homeVideos } = storeToRefs(videosState);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhoneVideoPlayer = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "videos" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(homeVideos), (video) => {
        _push(ssrRenderComponent(_component_PhoneVideoPlayer, {
          key: video.id,
          class: "videos__video",
          url: video.id,
          "link-text": video.linkText
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.198927f4.js.map
