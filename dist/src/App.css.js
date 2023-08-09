import { createHotContext, updateStyle, removeStyle } from '../node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/src/App.css.js");const __vite__id = "/Users/riyajain/Desktop/chrome-ext/src/App.css";
const __vite__css = "";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
