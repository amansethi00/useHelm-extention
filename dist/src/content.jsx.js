import react_default from '../vendor/deps/react.js';
import react_dom_client_default from '../vendor/deps/react-dom_client.js';
import App from './App.jsx.js';
import './index.css.js';
import react_jsx_dev_runtime_default from '../vendor/deps/react_jsx-dev-runtime.js';

var _jsxFileName = "/Users/riyajain/Desktop/chrome-ext/src/content.jsx";
 const React = react_default.__esModule ? react_default.default : react_default;
 const ReactDOM = react_dom_client_default.__esModule ? react_dom_client_default.default : react_dom_client_default;
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);
const currentUrl = window.location.href;
ReactDOM.createRoot(root).render(/* @__PURE__ */ _jsxDEV(React.StrictMode, {
  children: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 5
}, this));
