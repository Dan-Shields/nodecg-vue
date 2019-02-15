import NodeCGVueText from "./components/NCGVueText";

const NodeCGVue = {
  install(Vue) {
    Vue.component("ncg-vue-text", NodeCGVueText);
  },
  version: "0.3.0"
};

export default NodeCGVue;
