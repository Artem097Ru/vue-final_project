<template>
  <div class="transaction-form">
    <h2 class="transaction-form__title">Добавить транзакцию</h2>
    <form class="new-transaction-form" @submit.prevent="addNewTransaction">

      <div class="form-group">
        <label class="form-group__label" for="amount">Сумма</label>
        <input class="form-group__input" type="number" id="amount" v-model="amount" required>
      </div>
      <div class="form-group">
        <label class="form-group__label" for="category">Категория</label>
        <input class="form-group__input" type="text" id="category" v-model="category" required>
      </div>
      <div class="form-group">
        <label class="form-group__label" for="date">Дата</label>
        <input class="form-group__input" type="date" id="date" v-model="date" required>
      </div>
      <div class="form-group">
        <label class="form-group__label" for="description">Описание</label>
        <textarea class="form-group__input" id="description" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <label class="form-group__label">Тип транзакции</label>
        <div class="form-subgroup">
          <button class="form-group__type" type="button" :class="{ active: transactionType === 'Доходы', green: transactionType === 'Доходы' }" @click="setTransactionType('Доходы')">Доходы</button>
          <button class="form-group__type" type="button" :class="{ active: transactionType === 'Расходы', red: transactionType === 'Расходы' }" @click="setTransactionType('Расходы')">Расходы</button>
        </div>
      </div>

      <button class="transaction-form__submit" type="submit">Добавить транзакцию</button>
    </form>
  </div>
</template>

<script>
export default {  
  data() {
    return {
      amount: null,
      category: '',
      date: '',
      description: '',
      transactionType: null,
    };
  },
  methods: {
    addNewTransaction() {
      const transaction = {
        amount: this.amount,
        category: this.category,
        date: this.date,
        description: this.description,
        type: this.transactionType,
      };

      this.$store.commit('addTransaction', transaction);

      this.amount = null;
      this.category = '';
      this.date = '';
      this.description = '';
      this.transactionType = null;
    },
    setTransactionType(type) {
      this.transactionType = type;
    },
  },
};
</script>

<style>
.transaction-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.transaction-form__title {
  font-size: 40px;
  margin-bottom: 40px;
}

.new-transaction-form {
  display: flex;
  flex-direction: column;
  min-width: 500px;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
}

.form-group__label {
  margin-bottom: 10px;
  font-size: 25px;
  align-self: center;
}

.form-group__input {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,.2);
  max-width: 500px;
}

.form-subgroup {
  display: flex;
  flex-direction: row;
}

.form-group__type {
  width: 50%;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group__type:first-child {
  margin-right: 5px;
}

.form-group__type:hover {
  background-color: #ccc;
  transition: background-color 0.2s ease;
}

.form-group__type.green {
  color: white;
  background-color: #4CAF50;
}

.form-group__type.red {
  color: white;
  background-color: #d44551;
}

.transaction-form__submit {
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  border: none;
  padding: 20px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 25px;
  width: 70%;
  align-self: center;
}

.transaction-form__submit:hover {
  background-color: #45a049;
}
</style>