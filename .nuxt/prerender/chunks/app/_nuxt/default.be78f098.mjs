import { d as defineStore, s as storeToRefs, u as useRoute, _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { ref, watch, unref, useSSRContext, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createVNode } from 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/vue/index.mjs';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from 'file:///Users/guillaumequet/code/perso/projects-2022/rgb124/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$5 = {
  __name: "glitchLink",
  __ssrInlineRender: true,
  props: {
    word: String,
    url: String
  },
  setup(__props) {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const glitchLetters = ref([]);
    const isActive = ref(true);
    const glitchSometimes = async () => {
      await sleep(parseInt(Math.random() * 8500 + 1500));
      let repetitions = parseInt(Math.random() * 5 + 3);
      const repeat = setInterval(() => {
        if (repetitions > 0 && isActive.value) {
          glitchLetters.value.forEach((letter) => {
            const random = Math.random();
            letter.style.letterSpacing = `${Math.random() * 20 - 10}px`;
            letter.style.color = `${random > 0.5 ? "red" : "black"}`;
          });
          repetitions--;
        } else {
          glitchLetters.value.forEach((letter) => {
            letter.style.fontSize = `16px`;
            letter.style.color = `red`;
            letter.style.letterSpacing = `5px`;
          });
          clearInterval(repeat);
        }
      }, 30);
      glitchSometimes();
    };
    const route = useRoute();
    const currentRoute = ref(route.path);
    watch(route, (r) => {
      currentRoute.value = r.path;
      if (glitchLetters.value[0].parentNode.classList.contains("router-link-active")) {
        isActive.value = true;
        glitchSometimes();
      } else {
        isActive.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: __props.url }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.word, (letter) => {
              _push2(`<span data-v-857be24d${_scopeId}>${ssrInterpolate(letter)}</span>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.word, (letter) => {
                return openBlock(), createBlock("span", {
                  ref_for: true,
                  ref_key: "glitchLetters",
                  ref: glitchLetters
                }, toDisplayString(letter), 513);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/glitchLink.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-857be24d"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_GlitchLink = __nuxt_component_1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link link--home nav__link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RGB <br${_scopeId}> 124`);
      } else {
        return [
          createTextVNode("RGB "),
          createVNode("br"),
          createTextVNode(" 124")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_GlitchLink, {
    class: "link link--directing nav__link",
    word: "Directing & production",
    url: "/directing"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link link--3d nav__link",
    to: "/3d"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`3d/vfx`);
      } else {
        return [
          createTextVNode("3d/vfx")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link link--contact nav__link",
    to: "/contact"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`contact`);
      } else {
        return [
          createTextVNode("contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link link--portfolio nav__link",
    to: "/portfolio"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`portfolio`);
      } else {
        return [
          createTextVNode("portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navPhone.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const useBabylonStore = defineStore("BabylonStore", {
  state: () => ({
    progress: 0,
    logs: [],
    isLoading: true,
    baseURL: "https://raw.githubusercontent.com/guillaume-leo/rgb124/main/assets/"
  }),
  actions: {
    addLog(log) {
      this.logs = [log, ...this.logs];
    },
    setProgress(n) {
      this.progress = n;
    },
    setIsLoading(result) {
      this.isLoading = result;
    }
  }
});
const _sfc_main$3 = {
  __name: "shape",
  __ssrInlineRender: true,
  setup(__props) {
    const canvas = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvas",
        ref: canvas
      }, _attrs))}></canvas>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shape.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = "" + globalThis.__buildAssetsURL("rgb124-loading.7f6e6eee.gif");
const _sfc_main$2 = {
  __name: "log",
  __ssrInlineRender: true,
  props: {
    logs: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "logs" }, _attrs))} data-v-cedaf402><img class="logs__logo"${ssrRenderAttr("src", _imports_0$1)} alt="website loading logo" data-v-cedaf402><!--[-->`);
      ssrRenderList(__props.logs, (log, i) => {
        _push(`<li class="logs__log" style="${ssrRenderStyle({ "margin-left": `${Math.random() * 200}px` })}" data-v-cedaf402>${ssrInterpolate(i)} &gt; ${ssrInterpolate(log)}</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/log.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cedaf402"]]);
const _sfc_main$1 = {
  __name: "progress",
  __ssrInlineRender: true,
  props: {
    progress: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--7cd7ea14": __props.progress + "%"
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress" }, _attrs, _cssVars))} data-v-ff89f8f2><div class="progress__bar" data-v-ff89f8f2></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/progress.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ff89f8f2"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACzdJREFUeJzt3b/rV9UfwPFnmV8qTVqCioIMFIrIioqgKafIlppq7C9odGtp6cfSXxBNGRRNFTRkEoTRkhlOQQVZOYWVSirGd7gJH0Q+JOr7HPXx+Aue23ndc889twAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5nLd6IALsKXaVe2sdlT3VLdWGwc2AXDtOl0drX6qDlR7q4+rvwY2/WdXwgCwvdpdvVDdPLgFANZzotpTvV59P7hlXTMPADdVr1YvVzcMbgGAC3G6eqt6pfp7cMt5zToAbKs+rB4YHQIAF+Gr6vnqt9Eh55pxAHi4+rS6bXQIAFwCh1vOsB0cHbLWbAPAturLLP4AXF0OV49VR0aHnHX96IA1bqzez+IPwNXnruqjlvNtU9gwOmCN16rnRkcAwGVyZ3Wm2je4o5rnFcD26lBO+wNwdTvW8rp7+KuAWV4B7M7iD8DVb3PLp4HDzbADsKXl8wiX/ABwLThe3dHgGwNn2AHYlcUfgGvHpuqZ0REzDAA7RwcAwIoNX/tmGAB2jA4AgBV7cHTADAPA1tEBALBi944OmOEQ4Mnqf6MjAGCFTrZcgDfMDDsAAMCKzTAA/Dk6AABW7I/RATMMAD+ODgCAFfthdMAMA8CB0QEAsGLfjg6YYQDYOzoAAFbss9EBM3wFsLnlpwibRocAwAocr25v+THQMDPsAByr3hsdAQAr8m6DF/+aYwegll8jHqo2jg4BgMvoVHVfExwC3DA64F+/V7dUT44OAYDL6M3qg9ERNc8OQC03In1ePTE6BAAug/3VUy23AA430wBQy6GIr6u7R4cAwCX0a/V49cvokLNmOAS41pHq2erw6BAAuER+rp5uosW/5hsAqg5Wj1RfjA4BgIu0v+XJ/7vRIeea5RDguU5Ue6p/qkfzt0AAriynqjeql5rg3v/zmXUAqDpT7avebrkk6P4MAgDM7Xj1TvViy2n/M0Nr1jHbIcD1bK52tZygfKjaWt2aoQCAMU5VR1t+avdNy5dsnzTBJT8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBY140OuABbql3VzmpHdU91a7VxYBMA167T1dHqp+pAtbf6uPprYNN/diUMANur3dUL1c2DWwBgPSeqPdXr1feDW9Y18wBwU/Vq9XJ1w+AWALgQp6u3qleqvwe3nNesA8C26sPqgdEhAHARvqqer34bHXKuGQeAh6tPq9tGhwDAJXC45QzbwdEha802AGyrvsziD8DV5XD1WHVkdMhZ148OWOPG6v0s/gBcfe6qPmo53zaFDaMD1nitem50BABcJndWZ6p9gzuqeV4BbK8O5bQ/AFe3Yy2vu4e/CpjlFcDuLP4AXP02t3waONwMOwBbWj6PcMkPANeC49UdDb4xcIYdgF1Z/AG4dmyqnhkdMcMAsHN0AACs2PC1b4YBYMfoAABYsQdHB8wwAGwdHQAAK3bv6IAZDgGerP43OgIAVuhkywV4w8ywAwAArNgMA8CfowMAYMX+GB0wwwDw4+gAAFixH0YHzDAAHBgdAAAr9u3ogBkGgL2jAwBgxT4bHTDDVwCbW36KsGl0CACswPHq9pYfAw0zww7Aseq90REAsCLvNnjxrzl2AGr5NeKhauPoEAC4jE5V9zXBIcANowP+9Xt1S/Xk6BAAuIzerD4YHVHz7ADUciPS59UTo0MA4DLYXz3VcgvgcDMNALUcivi6unt0CABcQr9Wj1e/jA45a4ZDgGsdqZ6tDo8OAYBL5Ofq6SZa/Gu+AaDqYPVI9cXoEAC4SPtbnvy/Gx1yrlkOAZ7rRLWn+qd6NH8LBODKcqp6o3qpCe79P59ZB4CqM9W+6u2WS4LuzyAAwNyOV+9UL7ac9j8ztGYdsx0CXM/malfLCcqHqq3VrRkKABjjVHW05ad237R8yfZJE1zyAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjHXd6IALsKXaVe2sdlT3VLdWGwc2AXDtOl0drX6qDlR7q4+rvwY2/WdXwgCwvdpdvVDdPLgFANZzotpTvV59P7hlXTMPADdVr1YvVzcMbgGAC3G6eqt6pfp7cMt5zToAbKs+rB4YHQIAF+Gr6vnqt9Eh55pxAHi4+rS6bXQIAFwCh1vOsB0cHbLWbAPAturLLP4AXF0OV49VR0aHnHX96IA1bqzez+IPwNXnruqjlvNtU9gwOmCN16rnRkcAwGVyZ3Wm2je4o5rnFcD26lBO+wNwdTvW8rp7+KuAWV4B7M7iD8DVb3PLp4HDzbADsKXl8wiX/ABwLThe3dHgGwNn2AHYlcUfgGvHpuqZ0REzDAA7RwcAwIoNX/tmGAB2jA4AgBV7cHTADAPA1tEBALBi944OmOEQ4Mnqf6MjAGCFTrZcgDfMDDsAAMCKzTAA/Dk6AABW7I/RATMMAD+ODgCAFfthdMAMA8CB0QEAsGLfjg6YYQDYOzoAAFbss9EBM3wFsLnlpwibRocAwAocr25v+THQMDPsAByr3hsdAQAr8m6DF/+aYwegll8jHqo2jg4BgMvoVHVfExwC3DA64F+/V7dUT44OAYDL6M3qg9ERNc8OQC03In1ePTE6BAAug/3VUy23AA430wBQy6GIr6u7R4cAwCX0a/V49cvokLNmOAS41pHq2erw6BAAuER+rp5uosW/5hsAqg5Wj1RfjA4BgIu0v+XJ/7vRIeea5RDguU5Ue6p/qkfzt0AAriynqjeql5rg3v/zmXUAqDpT7avebrkk6P4MAgDM7Xj1TvViy2n/M0Nr1jHbIcD1bK52tZygfKjaWt2aoQCAMU5VR1t+avdNy5dsnzTBJT8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFei/wPRMA79OYiYGQAAAABJRU5ErkJggg==";
const _imports_1 = "" + globalThis.__buildAssetsURL("return-icon.2936becf.png");
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const babylonState = useBabylonStore();
    const { isLoading, progress, logs } = storeToRefs(babylonState);
    const isNavOpen = ref(false);
    const rgbLayer = ref(null);
    const route = useRoute();
    const currentPage = ref(route.path);
    watch(route, (r) => {
      isNavOpen.value = false;
      currentPage.value = r.path;
    });
    watch(isNavOpen, () => {
      rgbLayer.value.style.display = "block";
      const colors = ["green", "blue", "red"];
      let repetitions = 3;
      const interval = setInterval(() => {
        if (repetitions > 0) {
          rgbLayer.value.style.backgroundColor = colors[repetitions];
          repetitions--;
        } else {
          clearInterval(interval);
          rgbLayer.value.style.display = "none";
        }
      }, 45);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavPhone = __nuxt_component_0;
      const _component_Shape = _sfc_main$3;
      const _component_Log = __nuxt_component_2;
      const _component_Progress = __nuxt_component_3;
      _push(`<!--[--><div class="rgb-layer"></div><button class="button button--nav">`);
      if (!unref(isNavOpen)) {
        _push(`<img class="button__icon button__icon--nav"${ssrRenderAttr("src", _imports_0)} alt="open menu icon">`);
      } else {
        _push(`<img class="button__icon button__icon--nav"${ssrRenderAttr("src", _imports_1)} alt="close menu icon">`);
      }
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NavPhone, {
        style: unref(isNavOpen) ? null : { display: "none" }
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Shape, null, null, _parent));
      _push(ssrRenderComponent(_component_Log, {
        style: unref(isLoading) ? null : { display: "none" },
        logs: unref(logs).slice().reverse()
      }, null, _parent));
      _push(ssrRenderComponent(_component_Progress, {
        style: unref(isLoading) ? null : { display: "none" },
        progress: unref(progress)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.be78f098.mjs.map
