<template>
  <div class="app">
    <FinanceHeader />
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <FinanceFooter />
  </div>
</template>

<script>
import FinanceHeader from './components/FinanceHeader.vue';
import FinanceFooter from './components/FinanceFooter.vue';

export default {
  name: 'App',
  components: {
    FinanceHeader,
    FinanceFooter,
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

h2 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.container {
  max-width: 1830px;
  padding: 0 15px;
  margin: 0 auto;
}

</style>