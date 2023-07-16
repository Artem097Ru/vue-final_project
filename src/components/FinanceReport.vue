<template>
  <div class="report">
    <h2 class="report__title">Финансовый отчёт</h2>
    <div class="report__calc">
      <p class="report__item">Суммарные доходы: {{ totalIncome }}</p>
      <p class="report__item">Суммарные расходы: {{ totalExpenses }}</p>
      <p class="report__item">Прибыль: {{ transactionBalance }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['transactions']),
    totalIncome() {
      return this.transactions.reduce((total, transaction) => {
        if (transaction.type === 'Доходы') {
          return total + transaction.amount;
        }
        return total;
      }, 0);
    },
    totalExpenses() {
      return this.transactions.reduce((total, transaction) => {
        if (transaction.type === 'Расходы') {
          return total + transaction.amount;
        }
        return total;
      }, 0);
    },
    transactionBalance() {
      return this.totalIncome - this.totalExpenses;
    },
  },
};
</script>

<style>

.report {
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
}

.report__title {
  font-size: 40px;
  margin-bottom: 50px;
}

.report__item {
  font-size: 30px;
  margin: 0;
  margin-bottom: 30px;
}

</style>