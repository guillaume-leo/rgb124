import { useSSRContext, mergeProps, unref, ref } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { vIntersectionObserver } from "@vueuse/components";
import "@vimeo/player";
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
const videoPlayer_vue_vue_type_style_index_0_scoped_fefb996c_lang = "";
const _sfc_main$1 = {
  __name: "videoPlayer",
  __ssrInlineRender: true,
  props: {
    url: Number
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
      }, _attrs, ssrGetDirectiveProps(_ctx, unref(vIntersectionObserver), onIntersectionObserver)))} data-v-fefb996c><div class="title" data-v-fefb996c><p data-v-fefb996c>video title link</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/phone/videoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fefb996c"]]);
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const urls = ref([782874637, 595204743, 770835251, 510149559, 640436924, 32001208, 122375452]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhoneVideoPlayer = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "videos" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(urls), (url) => {
        _push(ssrRenderComponent(_component_PhoneVideoPlayer, {
          key: url,
          class: "videos__video",
          url
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
//# sourceMappingURL=index.0233316b.js.map
