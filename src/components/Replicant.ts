import Vue from 'vue';
import { Component, Prop, Watch} from 'vue-property-decorator'
import { NodeCGBrowser } from 'nodecg/types/lib/nodecg-instance';
import { ReplicantBrowser } from 'nodecg/types/browser';

declare global {
    interface Window { nodecg: NodeCGBrowser }
}

@Component
export default class NCGVueReplicant extends Vue {
	@Prop(String) replicantName: string
	@Prop({type: String, default: typeof window.nodecg === 'object' ? window.nodecg.bundleName : null}) replicantBundle: string

	replicant : ReplicantBrowser<any>;
	
	declareReplicant(name: string, bundle: string) {
		if (!name || !bundle) {
			return;
		}

		const opts = {
			schemaPath: `bundles/${encodeURIComponent(bundle)}/schemas/${encodeURIComponent(name)}.json`
		};

		this.replicant = nodecg.Replicant(name, bundle, opts);
		this.replicant.on('change', this.replicantChangeHandler);
	}
	
	retargetReplicant(name = this.replicantName, bundle = this.replicantBundle): void {
		if (!name || !bundle) {
			return;
		}

		// If there is an existing replicant, remove the event listener
		if (this.replicant) {
			this.replicant.removeListener('change', this.replicantChangeHandler);
		}

		this.declareReplicant(name, bundle);
	}

	replicantChangeHandler(): void {

	}

	@Watch('replicantName')
	replicantNameChanged(newVal: string) {
		this.retargetReplicant(newVal);
	}

	@Watch('replicantBundle')
	replicantBundleChanged(newVal: string) {
		this.retargetReplicant(this.replicantName, newVal);
	}
}
