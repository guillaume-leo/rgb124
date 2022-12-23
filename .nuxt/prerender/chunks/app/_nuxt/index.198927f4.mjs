import { mergeProps, unref, useSSRContext } from 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/vue/server-renderer/index.mjs';
import { vIntersectionObserver } from 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/@vueuse/components/index.mjs';
import { s as storeToRefs, _ as _export_sfc } from '../server.mjs';
import { u as useVideoStore } from './videos.018fbbcb.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/hookable/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/unctx/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/ufo/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/h3/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/destr/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/scule/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/ohash/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/radix3/dist/index.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=index.198927f4.mjs.map
