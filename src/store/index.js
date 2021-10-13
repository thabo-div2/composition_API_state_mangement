import { reactive, readonly } from "@vue/reactivity";

const state = reactive({
	counter: 0,
	colorCode: "blue",
});

const methods = {
	decreaseCounter() {
		state.counter--;
	},
	increaseCounter() {
		state.counter++;
	},
	setColorCode(val) {
		state.colorCode = val;
	},
};

const getters = {
	counterSquared() {
		return state.counter * state.counter;
	},
};

export default {
	state: readonly(state),
	methods,
	getters,
};
