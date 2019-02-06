import NodeCGVueText from "./components/NCGVueText";

import { VueConstructor } from "vue";

const NodeCGVue = {
  install(Vue: VueConstructor): void {
    Vue.component("ncg-vue-text", NodeCGVueText);
  },
  version: "0.1.0"
};

export default NodeCGVue;
