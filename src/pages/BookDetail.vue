<template>

</template>

<script>
  export default {
    data(){
      return{
        bookID:''
      }
    },
    created(){
      this.bookID = this.$route.params.bookId
    }
  }
</script>

<style>

</style>
