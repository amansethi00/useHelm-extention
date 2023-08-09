import { createHotContext } from '../../node_modules/vite/dist/client/client.mjs.js';
import exports from '../../vendor/react-refresh.js';
import './index.css.js';
import react_jsx_dev_runtime_default from '../../vendor/deps/react_jsx-dev-runtime.js';

import.meta.hot = createHotContext("/src/components/Homepage.jsx.js");let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    exports.register(type, "/Users/riyajain/Desktop/chrome-ext/src/components/Homepage.jsx " + id);
  };
  window.$RefreshSig$ = exports.createSignatureFunctionForTransform;
}
var _jsxFileName = "/Users/riyajain/Desktop/chrome-ext/src/components/Homepage.jsx";
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
const Homepage = () => {
  console.log("hp");
  return /* @__PURE__ */ _jsxDEV("div", {
    className: "container",
    children: "Homepage Rendere"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, void 0);
};
_c = Homepage;
var _c;
$RefreshReg$(_c, "Homepage");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import.meta.hot.accept();
  if (!window.__vite_plugin_react_timeout) {
    window.__vite_plugin_react_timeout = setTimeout(() => {
      window.__vite_plugin_react_timeout = 0;
      exports.performReactRefresh();
    }, 30);
  }
}

export { Homepage as default };
