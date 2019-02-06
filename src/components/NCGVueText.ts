import Vue from 'vue';
import VTextField from "vuetify/es5/components/VTextField";
import ReplicantComponent from "./Replicant"
import { NCGVueInput } from '../types/NCGVueInput';

export default Vue.extend({
  name: "ncg-vue-text",
  extends: VTextField,
  mixins: [ReplicantComponent],
  methods: {
    replicantChangeHandler(value: any) {
      (this as unknown as NCGVueInput).value = value;
    }
  },
  created() {
    this.$on('change', (val: string) => {
      (this as unknown as NCGVueInput).replicant.value = val
    });
  }
});
