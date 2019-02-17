import { VBtn } from "vuetify/lib";
import ReplicantTargeting from "./ReplicantTargeting"

export default VBtn.extend({
  name: "nodecg-toggle",
  mixins: [ReplicantTargeting],
  data() {
    return {
      checked: null
    }
  },
  props: {
    colors: {type: Object, default: () => {
        return {unchecked: 'green', checked: 'red'}
      }
    }
  },
  methods: {
    replicantValueChanged(val) {
      this.checked = val;
      this.checked = Boolean(val);
    }
  },
  created() {
    this.$on('click', () => {
      // Don't guess an initial value when replicant isn't bool. Wait for it to be initialised elsewhere.
      if (typeof this.checked !== "boolean") return;

      this.checked = !this.checked || false;

      if (typeof this.replicant === 'object') {
        this.replicant.value = this.checked;
			}
    });
  },
  render(h) {
    const setColor = (!this.outline && !this.flat && !this.disabled) ? this.setBackgroundColor : this.setTextColor;
    const { tag, data } = this.generateRouteLink(this.classes);

    // Content if replicant declared, loader if not
    const children = [
      this.genContent(),
      typeof this.checked !== "boolean" && this.genLoader()
    ];

    if (tag === 'button') data.attrs.type = this.type;

    data.attrs.value = ['string', 'number'].includes(typeof this.value)
      ? this.value
      : JSON.stringify(this.value);
      
    const color = this.checked !== null
      ? (this.checked ? this.colors.checked : this.colors.unchecked)
      : 'grey';

    return h(tag, setColor(color, data), children);
  }
});
