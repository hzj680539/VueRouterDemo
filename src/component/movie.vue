<template>
  <div id="movie" class="movie">
    <h1>Movie.</h1>
    <h2><a href="javascript:void(0);">{{title}}</a></h2>
    <ul>
      <li v-for="subject in subjects">
        <div class="subject">
          <div><img :src="subject.images.large" alt="" class="img"></div>
          <h3>{{subject.title}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        author: "黄飞鸿",
        title: "",
        subjects: []
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10').then( (response) => {
        this.title = response.data.title
        this.subjects = response.data.subjects
        console.dir(this.subjects)
      }, (response) => {
        console.error(response)

      });
    }
  }
</script>
<style lang="less">
.movie {
  padding: 5px;
  li {
    display: inline-block;
  }
}
.subject {
  width: 250px;
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
