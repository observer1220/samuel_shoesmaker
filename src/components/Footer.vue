<template>
  <div class="footer">
    <div>
      <h2><b>Samuel鞋匠工坊</b></h2>
      <ul class="social_media">
        <li><img src="../assets/facebook.png" alt=""></li>
        <li><img src="../assets/instagram.png" alt=""></li>
        <li><img src="../assets/youtube.png" alt=""></li>
        <li><a href="https://line.me/ti/p/JF5--IGvHZ" target="_blank"><img src="../assets/line.png" alt=""></a></li>
      </ul>
    </div>
    <ul>
      <li>營業時間：週一至週六 11:00 ~ 21:00</li>
      <li>公司地址：高雄市鳳山區光復路二段225號</li>
      <li>聯絡電話：(07)741-6730</li>
      <li>箴雅網站設計工作室</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
ul{
  padding-left: 0;
  font-weight: 900;
}
.footer{
  position: relative;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f0dcca;
  color: #412921;
  .social_media{
    display: flex;
    padding: 0;
    li{
      margin: 0 0 0 20px;
    }
    img{
      width: 40px;
    }
  }
  ul{
    margin: 10px;
    font-size: 16px;
    li{
      list-style: none;
    }
  }
}
</style>
