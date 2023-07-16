<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo">
        <a href="/">Одностраничное веб-приложение для контроля личных финансов</a>
      </div>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/" active-class="active-link" exact>Список транзакций</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/add-transaction" active-class="active-link">Добавить транзакцию</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/reports" active-class="active-link">Отчёт</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>

.header {
  padding: 20px;
  background-color: #9b9a9a;
  margin-bottom: 50px;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: 30px;
  font-weight: bold;
  max-width: 480px;
  text-align: center;
}

.nav__list {
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
}

.nav__item {
  text-decoration: none;
  color: #333;
  font-size: 30px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav__item:not(:last-child) {
  margin-right: 30px;
}

.nav__item a:hover, 
.header__logo a:hover {
  color: #ffffff;
}
.nav__item .active-link {
  color: #f0f0f0;
}
</style>