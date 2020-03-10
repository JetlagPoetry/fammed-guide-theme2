import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		substeps: [8, 3, 4, 11],
		panel_select: [],
		panel_read: [],
		panel_comment: [],
		panel_expand: [],
		panel_progress: [],
		btn_show_expand: [],
	},
	mutations: {
		initPanel(state) {
			var i;
			for (i = 0; i < state.substeps.length; i++) {
				state.panel_select.push(new Array(state.substeps[i]).fill(false));
				state.panel_read.push(new Array(state.substeps[i]).fill(false));
				// state.panel_expand.push(new Array(state.substeps[i]).fill(false));
				state.panel_expand.push(new Array());
				state.panel_comment.push(new Array(state.substeps[i]).fill(""));
				state.panel_progress.push(0);
				state.btn_show_expand.push(false);
			}

		},
		expandAllPanel(state, step) {
			if (state.btn_show_expand[step]) {
				//Click expand all, read all panels
				Vue.set(state.panel_expand, step, new Array(state.substeps[step]).fill(true));
				Vue.set(state.panel_read, step, new Array(state.substeps[step]).fill(true));
				Vue.set(state.panel_progress, step, 100);
				Vue.set(state.btn_show_expand, step, false);
			} else {
				Vue.set(state.panel_expand, step, new Array(state.substeps[step]).fill(false));
				Vue.set(state.btn_show_expand, step, true);
			}
		},
		selectAllPanel(state, step) {
			Vue.set(state.panel_select, step, new Array(state.substeps[step]).fill(true));
			Vue.set(state.panel_read, step, new Array(state.substeps[step]).fill(true));
			Vue.set(state.progress, 100);
		},
		expandPanel(state, step, substep) {
			if (!state.panel_read[step][substep]) {
				Vue.set(state.panel_read[step], substep, true);
				if (state.panel_read[step].every(this.itemIsExpanded)) {
					Vue.set(state.progress, step, 100);
				} else {
					Vue.set(state.progress, step, state.progress[step] + 100.0 / state.substeps[step]);
				}
			}
		},
		itemIsExpanded(item) {
			return item === true;
		},
	},
	actions: {},
	modules: {}
})