

const state = {
    history: [],
};

const getters = {
    getHistory: (state) => state.history,
};

const actions = {
    addCalculation: ({ commit }, operation) => {
        commit('addCalculation', operation);
    },

    addConvertion: ({ commit }, convertion) => {
        commit('addConvertion', convertion);
    },

    removeHistory: ({ commit }) => {
        commit('removeHistory');
    }
    
};

const mutations = {
    addCalculation: (state, operation) => {
        state.history.push(operation);
    },

    addConvertion: (state, convertion) => {
        state.history.push(convertion);
    },

    removeHistory: (state) => {
        state.history = [];
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}