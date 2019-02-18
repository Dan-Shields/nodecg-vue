import NCGVueText from "./components/nodecg-text/NCGVueText";
import NCGVueToggle from "./components/nodecg-toggle/NCGVueToggle";

const NodeCGVue = {
  install(Vue) {
    Vue.component("nodecg-text", NCGVueText);
    Vue.component("nodecg-toggle", NCGVueToggle);
  },
  version: "0.5.2"
};

export default NodeCGVue;
