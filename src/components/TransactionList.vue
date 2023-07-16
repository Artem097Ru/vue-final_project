<template>
  <div class="transaction-list">
    <h2 class="transaction-list__title">Список транзакций</h2>
    <table class="transaction-list__table">
      <thead>
        <tr>
          <th @click="sortBy('type')">Тип транзакции</th>
          <th @click="sortBy('category')">Категория</th>
          <th @click="sortBy('amount')">Сумма</th>
          <th @click="sortBy('date')">Дата</th>
          <th @click="sortBy('description')">Описание</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in sortedTransactions" :key="transaction.id" :class="{'income': transaction.type === 'Доходы', 'expense': transaction.type === 'Расходы'}">
          <td>{{ transaction.type }}</td>
          <td>{{ transaction.category }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.date }}</td>
          <td>{{ transaction.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['transactions']),
    sortedTransactions() {
  return this.transactions.slice().sort((a, b) => {
    switch (this.sortKey) {
      case 'type':
        if (a.type === b.type) {
          return new Date(a.date) - new Date(b.date);
        } else {
          return this.sortDirection * a.type.localeCompare(b.type);
        }
      case 'category':
      case 'description':
        return this.sortDirection * a[this.sortKey].localeCompare(b[this.sortKey]);
      case 'amount':
        return this.sortDirection * (a[this.sortKey] - b[this.sortKey]) || new Date(a.date) - new Date(b.date);
      case 'date':
        return this.sortDirection * (new Date(a[this.sortKey]) - new Date(b[this.sortKey]));
      default:
        return 0;
    }
  });
  },
  },
  data() {
    return {
      sortKey: '',
      sortDirection: 1, //сортировка по возрастанию
    };
  },
  methods: {
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortDirection *= -1;
      } else {
        this.sortKey = key;
        this.sortDirection = 1;
      }
    },
  },
};
</script>

<style>
.transaction-list__table {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  font-size: 20px;
  border-collapse: collapse;
}

.transaction-list__title {
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
}

.transaction-list__table td {
  padding: 8px;
  border: 1px solid rgb(0, 0, 0);
}

.transaction-list__table th {
  padding: 8px;
  cursor: pointer;
}

.transaction-list__table th:hover {
  background-color: #f2f2f2;
}

.transaction-list__table .income {
  background-color: #68d859;
}

.transaction-list__table .expense {
  background-color: #d65a5a;
}
</style>