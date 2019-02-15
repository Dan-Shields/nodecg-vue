import Vue from 'vue';

export default Vue.extend({
    props: {
        replicantName: String,
        replicantBundle: { type: String, default: typeof window.nodecg === 'object' ? window.nodecg.bundleName : null }
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
            this.replicant.on('change', this.replicantChangeHandler);
        },
        retargetReplicant(name = this.replicantName, bundle = this.replicantBundle) {
            if (!name || !bundle) {
                return;
            }
            // If there is an existing replicant, remove the event listener
            if (this.replicant) {
                this.replicant.removeListener('change', this.replicantChangeHandler);
            }
            this.declareReplicant(name, bundle);
        },
        replicantChangeHandler() {
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
