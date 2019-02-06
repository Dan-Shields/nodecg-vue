import NodeCGVueInput from "./components/NCGVueInput";

import { VueConstructor } from "vue";

const NodeCGVue = {
  install(Vue: VueConstructor): void {
    Vue.component("ncg-vue-input", NodeCGVueInput);
  },
  version: "0.1.0"
};

export default NodeCGVue;
