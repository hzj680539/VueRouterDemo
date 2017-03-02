<template>
  <div id="chinese">
    <h1>Chinese Book</h1>
    <h1>Chinese Book</h1>
    <h1>Chinese Book</h1>
    <h1>Chinese Book</h1>
    <ul>
      <li v-for="item in content">{{item.name}}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        postData: {"cmd":"i5service/common/divisionList","parameters":{"parentId":210000,"iToken":"be3f450c-be7b-4d81-bb50-d2e226254723"}},
        content: []
      }
    },
    mounted: function () {
      this.ajax(this.postData, data => this.content = data)
    }
  }
</script>
