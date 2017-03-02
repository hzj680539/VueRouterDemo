<template>
<div id="book">
  <h1>Book.</h1>
  <div class="books">
    <ul>
      <li><router-link to="chinese">Chinese Book</router-link></li>
      <li><router-link to="english">English Book</router-link></li>
      <li><router-link to="statistic">Statistic Book</router-link></li>
      <li><router-link to="japanese">Japanese Book</router-link></li>
    </ul>
    <ul>
      <li v-for="item in content">{{item.name}}</li>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import AjaxHelper from "../AjaxHelper.js"
  let ajax = new AjaxHelper();
  export default {
    data () {
      return {
        postData: {
          cmd: "i5service/common/divisionList",
          parameters: {
            parentId: 1,
            iToken: "be3f450c-be7b-4d81-bb50-d2e226254723"
          }
        },
        content: []
      }
    },
    mounted: function () {
      ajax.postText("https://api.i5sesol.com/cgi?"+Math.random(),this.postData, data => {this.content = data})
    }
  }
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
