<template>
  <div id="app">
    <div class="box">
      <header>
        <h1>Title Here</h1>
      </header>
      <article class="container">
        <div class="left-side">
          <ul>
            <li><router-link to="/book">BOOK</router-link></li>
            <li><router-link to="/movie">MOVIE</router-link></li>
            <li><router-link to="/music">MUSIC</router-link></li>
          </ul>
        </div>
        <div class="content">
          <router-view class="view"></router-view>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: Helvetica sans-serif;
  background: #fff;
}
header{
  background: greenyellow;
  text-align: center;
}
.box {
  width: 1000px;
  min-height: 600px;
  margin: 0 auto;
  background: #F2F6F7;
  a {
    text-decoration: none;
    display: block;
  }
}

.container {
  padding-top: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  ul li {
    list-style: none;
    padding: 5px;
    &:hover {
      background: green;
    }
  }
  .left-side {
    float: left;
    width: 200px;
    min-height: 400px;
    background: lime;
  }
  .content {
    float: left;
    min-height: 600px;
    margin-left: 5px;
    width: 795px;
    background: burlywood;
  }
}
</style>
