<template>
  <div>
    <tab></tab>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Tab from "../components/Tab.vue"
  import "../assets/less/site.less"
  export default {
    components: {Tab}
  }
</script>

<style>
</style>
