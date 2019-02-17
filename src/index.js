import NCGVueText from "./components/NCGVueText";
import NCGVueToggle from "./components/NCGVueToggle";

const NodeCGVue = {
  install(Vue) {
    Vue.component("nodecg-text", NCGVueText);
    Vue.component("nodecg-toggle", NCGVueToggle);
  },
  version: "0.5.1"
};

export default NodeCGVue;
