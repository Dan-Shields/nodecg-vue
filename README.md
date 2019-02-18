# NodeCG Vue
[![https://www.npmjs.com/package/nodecg-vue](https://img.shields.io/npm/v/nodecg-vue.svg?style=flat)](https://www.npmjs.com/package/nodecg-vue) [![https://github.com/Dan-Shields/nodecg-vue/blob/master/LICENSE](https://img.shields.io/npm/l/nodecg-vue.svg?style=flat)](https://github.com/Dan-Shields/nodecg-vue/blob/master/LICENSE)

### Drop-in Vue UI components for use in a NodeCG dashboard panel
Using [Vuetify](https://vuetifyjs.com) components as a base, this project is designed to make dashboard development quicker and less cluttered when using Vue, by abstracting away repeated boilerplate code. The idea (and some replicant targeting code) was taken from the  Polymer component library, [NodeCGElements](https://github.com/NodeCGElements/nodecg-dashboard-elements). Thanks Lange.

| Component                                                                                           | Base Component                                                    | Status |
| -------------                                                                                       | -------------                                                     | ------------- |
| [nodecg-text](https://github.com/Dan-Shields/nodecg-vue/tree/master/src/components/nodecg-text)     | [v-text-field](https://vuetifyjs.com/en/components/text-fields)   | [![Needs Testing](https://img.shields.io/badge/status-needs%20testing-yellow.svg)](#) |
| [nodecg-toggle](https://github.com/Dan-Shields/nodecg-vue/tree/master/src/components/nodecg-toggle) | [v-button](https://vuetifyjs.com/en/components/buttons)           | [![Needs Testing](https://img.shields.io/badge/status-needs%20testing-yellow.svg)](#) |
| nodecg-select                                                                                       | [v-select](https://vuetifyjs.com/en/components/selects)           | [![Planned](https://img.shields.io/badge/status-planned-lightgrey.svg)](#)            |
| nodecg-combobox                                                                                     | [v-combobox](https://vuetifyjs.com/en/components/combobox)        | [![Planned](https://img.shields.io/badge/status-planned-lightgrey.svg)](#)            |
| nodecg-list                                                                                         | [v-list](https://vuetifyjs.com/en/components/lists)               | [![Planned](https://img.shields.io/badge/status-planned-lightgrey.svg)](#)            |
| nodecg-menu                                                                                         | [v-menu](https://vuetifyjs.com/en/components/menus)               | [![Planned](https://img.shields.io/badge/status-planned-lightgrey.svg)](#)            |
| nodecg-time-picker                                                                                  | [v-time-picker](https://vuetifyjs.com/en/components/time-pickers) | [![Planned](https://img.shields.io/badge/status-planned-lightgrey.svg)](#)            |

## Install
1. `npm install nodecg-vue`
2. Setup your base component:
```javascript
import Vue from 'vue';
import Vuetify from 'vuetify';
import NodeCGVue from 'nodecg-vue';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(NodeCGVue);

import MyComponent from './MyComponent.vue';

new Vue({
	render: h => h(MyComponent)
}).$mount('#app');
```

## Usage
Examples and description for the components can be found in each component's README. Click the name of an element above to go there. 

As each component is just an extended Vuetify component, all the props, slots and events that you would expect are available.

Every component has at least the following props added to interface with the replicant:
- *String*: **replicantName** - The name of the target replicant. ***Required***
- *String*: **replicantBundle** - The bundle namespace of the target replicant. If a NodeCG API context is available (`window.nodecg`), this defaults to the current bundle (`window.nodecg.bundleName`).
- *Object*: **replicantOpts** - The desired options to be passed to the Replicant upon declaration. See [the NodeCG docs](https://nodecg.com/NodeCG.html#Replicant) for more info on this. Defaults to an empty object. ***Cannot changed after component is mounted.***

## Contributing
The most needed thing at this stage is testing and feedback. If you encounter any bugs or have a feature request, an issue or PR would be much appreciated.
