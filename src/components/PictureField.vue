<template>
  <div class="PictureField">
    <div class="banner_1">
      <div class="img_div">
        <img class="pic" src="https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="">
        <router-link to="/about">
          <div class="mask"></div>
          <div class="textbox">
            <h3>關於吉昇</h3>
            <p>About</p>
          </div>
        </router-link>
      </div>
      <div class="img_div">
        <img class="pic" src="../assets/Picture2.jpg" alt="">
        <router-link to="/news">
          <div class="mask"></div>
          <div class="textbox">
            <h3>服務項目</h3>
            <p>Service</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="banner_2">
      <div class="img_div">
        <img class="pic" src="../assets/Picture3.jpg" alt="">
        <router-link to="/case">
          <div class="mask"></div>
          <div class="textbox">
            <h3>客製皮件</h3>
            <p>Customize</p>
          </div>
        </router-link>
      </div>
      <div class="img_div">
        <img class="pic" src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80" alt="">
        <router-link to="/case">
          <div class="mask"></div>
          <div class="textbox">
            <h3>聯絡我們</h3>
            <p>Contact</p>
          </div>
        </router-link>
      </div>
      <div class="img_div">
        <img class="pic" src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="">
        <router-link to="/contact">
          <div class="mask"></div>
          <div class="textbox">
            <h3>員工專區</h3>
            <p>Staff</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.PictureField{
  max-width: 1080px;
  margin: 60px auto;
  .banner_1{
    display: flex;
    justify-content: center;
    .img_div{
      position: relative;
      margin: 5px;
      .pic{
        max-width: 100%;
        max-height: 270px;
        object-fit: cover;
      }
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(70deg, green, blue);
        opacity: 0.2;
      }
      &:hover{
        opacity: 0.8;
        transition-duration: 0.5s;
      }
      .textbox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: white;
        h3{
          font-weight: 900;
        }
      }
    }
  }
  .banner_2{
    display: flex;
    justify-content: center;
    .img_div{
      position: relative;
      margin: 5px;
      .pic{
        max-width: 100%;
        max-height: 270px;
        object-fit: cover;
      }
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(70deg, green, blue);
        opacity: 0.2;
      }
      &:hover{
        opacity: 0.8;
        transition-duration: 0.5s;
      }
      .textbox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: white;
        h3{
          font-weight: 900;
        }
      }
    }
  }
}
@media (min-width:320px) and (max-width:667px) {
  .textbox{
    h3{
      font-size: 16px;
    }
  }
}
</style>
