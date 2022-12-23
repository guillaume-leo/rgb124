import { u as useVideoStore } from './videos.018fbbcb.mjs';
import { _ as _export_sfc, s as storeToRefs } from '../server.mjs';
import { unref, useSSRContext } from 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/vue/server-renderer/index.mjs';
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

export { index as default };
//# sourceMappingURL=index.185e3090.mjs.map
