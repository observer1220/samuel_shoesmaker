<template>
  <div class="AccessField">
    <h3>交通索引 Access</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.657464115021!2d120.34248931399861!3d22.629262936593435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1b354385e883%3A0x308b41fc0ccd007a!2z5ZCJ5piH55qu6Z6L!5e0!3m2!1szh-TW!2stw!4v1636821714999!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <ul class="AccessInfo">
      <li>營業時間：週一至週六 11:00~21:00</li>
      <li>公司地址：高雄市鳳山區光復路二段225號</li>
      <li>聯絡電話：(07)741-6730</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul{
  list-style: none;
}
.AccessField{
  max-width: 940px;
  height: 550px;
  margin: 0 auto;
  position: relative;
  h3{
    text-align: center;
    line-height: 60px;
  }
  .AccessInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: black;
    opacity: 0.8;
    color: white;
    font-weight: 900;
    font-size: 16px;
    padding: 20px;
    position: absolute;
    bottom: 10px;
    right: 0;
  }
}
</style>
