<template>
  <div id="movie">
    <h1>Music.</h1>
    <a href="">Written by XXXX</a>
    <ul>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
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
      var vm = this
      vm.$http.post("https://api.i5sesol.com/cgi?"+Math.random(),vm.postData).then((response) => {
//        vm.$set('gridData', response.data)
//        vm.gridData = response.data
        console.log("CCCC")
        console.dir(response.data)
      })
    }
  }
</script>
