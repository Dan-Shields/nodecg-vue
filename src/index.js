import NodeCGVueText from "./components/NCGVueText";

const NodeCGVue = {
  install(Vue) {
    Vue.component("nodecg-text", NodeCGVueText);
  },
  version: "0.4.0"
};

export default NodeCGVue;
