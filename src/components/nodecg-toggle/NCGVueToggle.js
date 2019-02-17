import { VBtn } from "vuetify/lib";
import ReplicantTargeting from "../../mixins/Replicant"

export default VBtn.extend({
  name: "nodecg-toggle",
  mixins: [ReplicantTargeting],
  data() {
    return {
      checked: null
    }
  },
  props: {
    toggleData: {type: Object, default: () => {
        return {
          color: {unchecked: 'green', checked: 'red'},
          text: {unchecked: 'on', checked: 'off'}
        }
      }
    }
  },
  methods: {
    replicantValueChanged(val) {
      this.checked = val;
    },
    genContent() {
      if (typeof this.checked !== "boolean") return;

      const content = this.checked ? this.toggleData.text.checked : this.toggleData.text.unchecked;

      return this.$createElement(
        'div',
        { 'class': 'v-btn__content' },
        content
      );
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
      typeof this.checked === "boolean" && this.genContent(),
      typeof this.checked !== "boolean" && this.genLoader()
    ];

    if (tag === 'button') data.attrs.type = this.type;

    data.attrs.value = ['string', 'number'].includes(typeof this.value)
      ? this.value
      : JSON.stringify(this.value);
      
    const color = typeof this.checked === "boolean"
      ? (this.checked ? this.toggleData.color.checked : this.toggleData.color.unchecked)
      : 'grey';

    return h(tag, setColor(color, data), children);
  }
});
