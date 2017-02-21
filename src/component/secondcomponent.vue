<template>
  <div id="secondcomponent">
    <h1>Page two.</h1>
    <a href="">Written by {{author}}</a>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: "黄飞鸿",
        articles: []
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
        headers: {

        },
        emulateJSON: true
      }).then(function (response) {
        this.articles = response.data.subjects
        console.dir(this.articles)
      }, function (response) {
        console.log(response)

      });
    }
  }
</script>
<style>

</style>
