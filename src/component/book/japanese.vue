<template>
  <div id="statistic">
    <h1>Japanese Book</h1>
    <h1>Japanese Book</h1>
    <h1>Japanese Book</h1>
    <h1>Japanese Book</h1>
    <ul>
      <li v-for="item in content">{{item.name}}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data () {
      return {
        postData: {"cmd":"i5service/common/divisionList","parameters":{"parentId":370000,"iToken":"be3f450c-be7b-4d81-bb50-d2e226254723"}},
        content: []
      }
    },
    mounted: function () {
//      this.ajax(this.postData, data => this.content = data)

      axios.post("https://api.i5sesol.com/cgi?"+Math.random(),this.postData).then(function (data) {
        console.log("V7")
        console.log(data.data.response)
      })
    }
  }
</script>
