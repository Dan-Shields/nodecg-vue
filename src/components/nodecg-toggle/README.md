# nodecg-toggle

## Usage example
```Vue
<template>
	<div>
    {{value}}
		<nodecg-toggle replicantName="testRep" :replicantOpts="{defaultValue: false}"></nodecg-toggle>
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
The value of the replicant will be... replicated, in `value`, the "checked" state of the button, and obviously anywhere else the replicant is used.

In practice, declaring the replicant twice in one component (nodecg-text and the parent script) would defeat the point of this component, and you'd use `v-on:change="onRepChange"` if you needed to access the replicant value of `nodecg-text`. This is just to demonstrate that the component does in fact bind to the replicant.

## Non-bool Replicant Behaviour
If the replicant chosen is empty, or not boolean, and if no default value was specified in `replicantOpts`, the button will be disabled and show a [loader](https://vuetifyjs.com/en/components/buttons#loaders) until some other section of code updates the replicant to a bool. This stops the button "guessing" at the value it currently has (usually `false`), which could otherwise have unintended consequences.

## Props

All props from the base component [VBtn](https://vuetifyjs.com/en/components/buttons) are carried over, and the following properties are added:
- *String*: **replicantName** - The name of the target replicant. ***Required***
- *String*: **replicantBundle** - The bundle namespace of the target replicant. If a NodeCG API context is available (`window.nodecg`), this defaults to the current bundle (`window.nodecg.bundleName`).
- *Object*: **replicantOpts** - The desired options to be passed to the Replicant upon declaration. See [the NodeCG docs](https://nodecg.com/NodeCG.html#Replicant) for more info on this. Defaults to an empty object. ***Cannot changed after component is mounted.***
- *Object*: **toggleData** - Allows user to easily set text and colour of the button to change dependent on the replicant value. Contains 2 objects "color" and "text" which contain a "unchecked" and an "checked" value each. Color can be [a Vuetify color class](https://vuetifyjs.com/en/framework/colors#material-colors) or a normal CSS color (hex/hsl). Defaults to ```{
    color: {unchecked: 'green', checked: 'red'},
    text: {unchecked: 'on', checked: 'off'}
  }```
