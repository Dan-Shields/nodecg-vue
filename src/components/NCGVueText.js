import { VTextField } from "vuetify/lib";
import ReplicantComponent from "./Replicant"

export default VTextField.$_wrapperFor.extend({
  name: "ncg-vue-text",
  extends: VTextField,
  mixins: [ReplicantComponent],
  methods: {
    replicantChangeHandler(val) {
      this.value = val;
    }
  },
  created() {
    this.$on('change', val => {
      this.replicant.value = val
    });
  }
});
