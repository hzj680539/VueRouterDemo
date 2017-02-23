<template>
<div id="book">
  <h1>Book.</h1>
  <div class="books">
    <ul>
      <li><router-link to="chinese">Chinese Book</router-link></li>
      <li><router-link to="english">English Book</router-link></li>
      <li><router-link to="statistic">Statistic Book</router-link></li>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>

</script>

<style lang="less">
.books {
  font-weight: bold;
  background: lightblue;
  ul li {
    display: inline-block;
  }
}

</style>
