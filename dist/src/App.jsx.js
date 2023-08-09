import { createHotContext } from '../node_modules/vite/dist/client/client.mjs.js';
import exports from '../vendor/react-refresh.js';
import react_default from '../vendor/deps/react.js';
import './App.css.js';
import Homepage from './components/Homepage.jsx.js';
import react_jsx_dev_runtime_default from '../vendor/deps/react_jsx-dev-runtime.js';

import.meta.hot = createHotContext("/src/App.jsx.js");let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    exports.register(type, "/Users/riyajain/Desktop/chrome-ext/src/App.jsx " + id);
  };
  window.$RefreshSig$ = exports.createSignatureFunctionForTransform;
}
var _jsxFileName = "/Users/riyajain/Desktop/chrome-ext/src/App.jsx", _s = $RefreshSig$();
 const useState = react_default["useState"];
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
function App() {
  _s();
  const [count, setCount] = useState(0);
  console.log("appp ssss");
  return /* @__PURE__ */ _jsxDEV("div", {
    className: "App",
    children: /* @__PURE__ */ _jsxDEV(Homepage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_s(App, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
_c = App;
var _c;
$RefreshReg$(_c, "App");
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

export { App as default };
