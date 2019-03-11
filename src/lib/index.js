import htm from "htm";

import { patch } from "./vdom";
import { comp } from "./component";
import { createElement } from "./element";

const html = htm.bind(createElement);

// Mounts a given component on a given DOM node
const mount = (component, node) => patch(node, component);

export { comp, mount, html };
