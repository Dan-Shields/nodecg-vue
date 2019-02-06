import { ReplicantBrowser } from 'nodecg/types/browser';
import {ThisTypedComponentOptionsWithRecordProps} from 'vue/types/options';

export class NCGVueInput extends ThisTypedComponentOptionsWithArrayProps {
	value: string;
	replicant: ReplicantBrowser
}
