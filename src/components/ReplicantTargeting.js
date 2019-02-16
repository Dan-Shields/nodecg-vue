import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            replicant: null
        }
    },
    props: {
        replicantName: String,
        replicantBundle: { type: String, default: typeof window.nodecg === 'object' ? window.nodecg.bundleName : null },
        replicantOpts: Object
    },
    mounted() {
        if (!this.replicant && this.replicantName && this.replicantBundle) {
            this.declareReplicant(this.replicantName, this.replicantBundle);
        }
    },
    methods: {
        declareReplicant(name, bundle) {
            if (!name || !bundle) {
                return;
            }
            const opts = {
                schemaPath: `bundles/${encodeURIComponent(bundle)}/schemas/${encodeURIComponent(name)}.json`
            };
            this.replicant = nodecg.Replicant(name, bundle, opts);
            this.replicant.on('change', this._replicantChangeHandler);

            this.$emit('retarget', {name, bundle});
        },
        retargetReplicant(name = this.replicantName, bundle = this.replicantBundle) {
            if (!name || !bundle) {
                return;
            }
            // If there is an existing replicant, remove the event listener
            if (this.replicant) {
                this.replicant.removeListener('change', this._replicantChangeHandler);
            }
            this.declareReplicant(name, bundle);
        },
        _replicantChangeHandler(...args) {
            if (typeof this.replicantValueChanged === 'function') {
				this.replicantValueChanged(...args);
			}
        }
    },
    watch: {
        replicantName: newVal => {
            this.retargetReplicant(newVal);
        },
        replicantBundle: newVal=> {
            this.retargetReplicant(this.replicantName, newVal);
        }        
    }
});
