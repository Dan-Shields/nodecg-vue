import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            replicant: null,
            replicantDeclared: false
        }
    },
    props: {
        replicantName: String,
        replicantBundle: { type: String, default: typeof window.nodecg === 'object' ? window.nodecg.bundleName : null },
        replicantOpts: {type: Object, default: {}}
    },
    mounted() {
        if (!this.replicant && this.replicantName) {
            this.declareReplicant(this.replicantName, this.replicantBundle);
        }
    },
    methods: {
        declareReplicant(name, bundle = this.bundleName) {
            if (!name || !bundle) {
                return;
            }

            // If there is an existing replicant, remove the event listener
            if (this.replicant) {
                this.replicant.removeListener('change', this._replicantChangeHandler);
            }

            this.replicant = nodecg.Replicant(name, bundle, this.replicantOpts);
            this.replicant.on('change', this._replicantChangeHandler);
            
            this.$emit('retarget', {name, bundle});
        },
        _replicantChangeHandler(...args) {
            this.replicantDeclared = true;

            this.$emit('change', args);

            if (typeof this.replicantValueChanged === 'function') {
				this.replicantValueChanged(...args);
			}
        }
    },
    watch: {
        replicantName(newVal) {
            this.declareReplicant(newVal);
        },
        replicantBundle(newVal) {
            this.declareReplicant(this.replicantName, newVal);
        }     
    }
});
