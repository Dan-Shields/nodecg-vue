import { VTextField } from "vuetify/lib";
import ReplicantTargeting from "../../mixins/Replicant"

export default VTextField.$_wrapperFor.extend({
  name: "nodecg-text",
  mixins: [ReplicantTargeting],
  methods: {
    replicantValueChanged(val) {
      this.lazyValue = val;
    }
  },
  created() {
    this.$on('input', val => {
      if (typeof this.replicant === 'object') {
        this.replicant.value = val;
			}
    });
  }
});
