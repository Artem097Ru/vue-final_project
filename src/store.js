import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      transactions: [],
    };
  },
  mutations: {
    addTransaction(state, transaction) {
      state.transactions.push(transaction);
    },
  },
  actions: {
    addTransaction({ commit }, transaction) {
      commit('addTransaction', transaction);
    },
  },
  getters: {
    totalIncome(state) {
      return state.transactions.reduce((total, transaction) => {
        if (transaction.type === 'income') {
          return total + transaction.amount;
        }
        return total;
      }, 0);
    },
    totalExpenses(state) {
      return state.transactions.reduce((total, transaction) => {
        if (transaction.type === 'expense') {
          return total + transaction.amount;
        }
        return total;
      }, 0);
    },
  },
});

export default store;