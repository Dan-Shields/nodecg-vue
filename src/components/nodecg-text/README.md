# nodecg-text

## Usage example
```Vue
<template>
	<div>
    {{value}}
		<nodecg-text dark replicantName="testRep"></nodecg-text>
	</div>
</template>

<script>
const testRep = nodecg.Replicant('testRep');

export default {
	data() {
		return {
      value: null
		};
	},
  mounted() {
    testRep.on('change', newVal => {
      this.value = newVal
    });
  }
};
</script>
```

The value of the replicant will be... replicated, in the text field, `value`, and obviously anywhere else the replicant is used.

In practice, declaring the replicant twice in one component (nodecg-text and the parent script) would defeat the point of this component, and you'd use `v-on:change="value"` if you needed to access the replicant value of `nodecg-text`. This is just to demonstrate that the component does in fact bind to the replicant.

## Props

All props from the base component [VTextField](https://vuetifyjs.com/en/components/text-fields) are carried over, and the following properties are added:
- *String*: **replicantName** - The name of the target replicant. ***Required***
- *String*: **replicantBundle** - The bundle namespace of the target replicant. If a NodeCG API context is available (`window.nodecg`), this defaults to the current bundle (`window.nodecg.bundleName`).
- *Object*: **replicantOpts** - The desired options to be passed to the Replicant upon declaration. See [the NodeCG docs](https://nodecg.com/NodeCG.html#Replicant) for more info on this. Defaults to an empty object. ***Cannot changed after component is mounted.***
