<template>
  <div class="about_container">
    <div class="parallax_scroll">
      <!-- <img src="../assets/about/banner_2.jpg" alt=""> -->
    </div>
    <!-- 公司背景故事 -->
    <div class="main_box" id="company">
      <div class="main_text">
        <h2>緣起－Samuel鞋匠工坊的誕生</h2>
        <p>30多年前，我們在高雄創業，奠定基礎後，一路往北發展，擴大到台南、台中、新竹、台北、新北、基隆等地，一步一腳印，紮實經營， 目前集團員工超過千人，興富發建設和潤隆建設兩家上市公司的資產，合計已超過3,200億元，維持在台灣前百大企業的排名，未來將進入前50大。</p>
        <p>但是，對我們來說，一切都在銷售策略的預期之中，這並不是我們有什麼特別的招數，只是很單純的，從客戶的角度出發，去思考使用者的需求，從基地位置的選擇、目標客戶的輪廓、建築外觀的設計、公設項目與風格、坪數的規劃，到客戶的自備款、每月貸款負擔…等，有了這些條件的齊備，才是一個建案銷售的完整思考。這就是我常分享的：在什麼時機、在哪裡、蓋什麼房子、賣給誰、賣多少錢? 有創新，才能創造需求、刺激消費、創造產品價值。</p>
      </div>
      <!-- <img src="https://www.highwealth.com.tw/img/about/about-2.jpg" alt=""> -->
      <!-- <div class="main_text">
        <h2>門市介紹</h2>
        <img src="../assets/store.jpg" alt="">
      </div> -->
    </div>
    <AccessField/>
  </div>
</template>
<script lang="ts">
import AccessField from '../components/AccessField.vue'
export default {
  components: {
    AccessField
  }
}
</script>
<style lang="scss">
.about_container{
  position: relative;
  margin: 70px auto;
  .parallax_scroll{
    img{
      width: 100%;
      height: auto;
    }
    animation: animation 1s linear;
    @keyframes animation {
      from {
        background-position: 0% 100%;
        opacity: 0;
      }
      to {
        background-position: 0% 0%;
        opacity: 1;
      }
    }
  }
  .parallax_scroll2{
    width: 100%;
    height: 500px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url('https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
  }
  .main_box{
    max-width: 940px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .main_text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      padding: 20px;
      h2{
        font-weight: 900;
        line-height: 2;
      }
      P{
        text-indent: 32px;
      }
    }
    img{
      max-width: 300px;
      object-fit: contain;
    }
  }
}
/* 響應式設計 */
@media (min-width:500px) and (max-width:767px) {
  .about{
    .fade_in_title{
      font-size: 36px;
    }
  }
  .main_box{
    display: flex;
    flex-direction: column;
  }
}
@media (min-width:320px) and (max-width:667px) {
  .about{
    .fade_in_title{
      font-size: 24px;
    }
    .btn_cluster{
      button{
        font-size: 14px;
      }
    }
  }
  .main_box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
