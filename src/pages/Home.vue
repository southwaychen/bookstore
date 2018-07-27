<template>
  <div>
    <div class="section">
      <slider :slides="page_data.top"></slider>
      <div class="announcement">
        <label>快讯</label>
        <span>今日上架的图书全部8折</span>
      </div>
    </div>
    <div class="section">
      <book-list :books="page_data.promotions"
                 heading="最新更新"
                 @select="preview($event)">
      </book-list>
    </div>
  </div>
</template>

<script>
  import Slider from "../components/Slider.vue"
  import BookList from "../components/BookList.vue"
  import faker from "../fixtures/faker"
  export default {
    data () {
      return {
        page_data: undefined,
        selected:undefined
      }
    },
    created() {

      this.page_data = faker.getHomeData()

//            this.$http.get('/books/promotions', (res)=> {
//                this.page_data = res.data
//            }, (error)=> {
//                // 处理出错信息
//            })

    },
    components: {Slider,BookList}
  }
</script>

<style>
  .announcement {
    font-size: 12px;
    padding:5px;
    background:#fff;
  }

  .announcement > label {
    padding: 3px 10px;
    margin: 3px 10px;
    background: #FACCB7;
    border-radius: 3px;
    color: #FF5102;

  }

  .announcement > span {
    padding: 3px 10px;
    color: #333;
    display:inline-block;
  }
</style>
