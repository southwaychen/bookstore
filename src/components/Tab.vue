<template>
  <div class="tab">
    <router-link :to="{name:'Home'}" tag="li" exact>
      <div>
        <img src="../assets/images/home.svg"/>
      </div>
      <div>首页</div>
    </router-link>
    <router-link :to="{name:'Category'}" tag="li">
      <div>
        <img src="../assets/images/category.svg"/>
      </div>
      <div>分类</div>
    </router-link>
    <router-link :to="{name:'Cart'}" tag="li">
      <div>
        <img src="../assets/images/cart.svg"/>
      </div>
      <div>购物车</div>
    </router-link>
    <router-link :to="{name:'Me'}" tag="li">
      <div>
        <img src="../assets/images/me.svg"/>
      </div>
      <div>我的</div>
    </router-link>
  </div>
</template>

<script>
  import "../assets/less/tab.less"
  //const _data = require("../assets/images/category.svg").toString()
  //console.log(_data)
  export default {}
</script>

<style>

</style>
