<template>
  <div id="movie">
    <h1>Movie.</h1>
    <a href="">Written by {{author}}</a>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        author: "黄飞鸿",
        articles: []
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10').then( (response) => {
        this.articles = response.data.subjects
        console.dir(this.articles)
      }, (response) => {
        console.log(response)

      });
    }
  }
</script>
<style>

</style>
