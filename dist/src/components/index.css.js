import { createHotContext, updateStyle, removeStyle } from '../../node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/src/components/index.css.js");const __vite__id = "/Users/riyajain/Desktop/chrome-ext/src/components/index.css";
const __vite__css = ".container {\n    height: 300px;\n    width: 300px;\n}";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
