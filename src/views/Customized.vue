<template>
  <div class="solution">
      <div class="flow_chart">
        <h3><b>服務項目與價目表</b></h3>
        <div class="priceList">
          <table class="price_table">
            <tr>
              <th>維修項目</th>
              <th>收費標準</th>
              <th>工作天數</th>
            </tr>
            <tr v-for="(item, index) in priceList" :key="index" @mouseover="hovered = item.id" @mouseleave="hovered = null">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.day }}</td>
            </tr>
          </table>
          <div class="price_image" v-for="(item, index) in picList" :key="index">
            <img v-show="hovered == item.id" :src="item.picture" alt="">
          </div>
        </div>
      </div>
      <div class="remark_container">
        <h3><b>備註</b></h3>
        <ul class="remarkList">
          <li v-for="(item, index) in remarkList" :key="index">{{ item.remark }}</li>
        </ul>
      </div>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      priceList: [
        {
          id: 33,
          name: '長夾',
          price: '$6000',
          day: ''
        },
        {
          id: 34,
          name: '短夾',
          price: '$4000',
          day: ''
        },
        {
          id: 35,
          name: 'L型短夾',
          price: '$1800',
          day: ''
        },
        {
          id: 36,
          name: '腰包',
          price: '$2000',
          day: ''
        },
        {
          id: 37,
          name: '手機套',
          price: '$1500',
          day: ''
        },
        {
          id: 38,
          name: '鑰匙圈',
          price: '$150起',
          day: ''
        },
        {
          id: 39,
          name: 'Gogoro鑰匙皮套',
          price: '$600',
          day: ''
        },
        {
          id: 40,
          name: '皮帶',
          price: '$1800',
          day: ''
        }
      ],
      hovered: null,
      picList: [
        {
          id: 1,
          picture: require('../assets/priceList/1.jpg')
        },
        {
          id: 2,
          picture: require('../assets/priceList/2.jpg')
        },
        {
          id: 3,
          picture: require('../assets/priceList/3.jpg')
        },
        {
          id: 4,
          picture: require('../assets/priceList/4.jpg')
        },
        {
          id: 5,
          picture: require('../assets/priceList/5.jpg')
        },
        {
          id: 6,
          picture: require('../assets/priceList/6.jpg')
        }
      ],
      remarkList: [
        {
          remark: '1. 若由他人代領維修鞋，必須來電確認，並於維修單上簽名方可交付。'
        },
        {
          remark: '2. 若皮件損壞嚴重至無法修復，本公司有權不予維修。'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.solution{
  font-family: arial, sans-serif;
  max-width: 940px;
  position: relative;
  margin: 70px auto;
  .flow_chart{
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .priceList{
      display: flex;
      .price_table{
        width: 60%;
        td, th {
          border: 1px solid #dddddd;
          text-align: center;
          padding: 5px;
        }
        tr:nth-child(even) {
          background: #dddddd;
        }
      }
      .price_image{
        img{
          width: 300px;
          height: 250px;
          object-fit: cover;
        }
      }
    }
  }
  .remark_container{
    ul{
      list-style: none;
    }
  }
}

/* 響應式設計 */
@media (min-width:320px) and (max-width:767px) {
  .solution{
      .flow_chart{
      margin-top: 140px;
    }
  }
}
</style>
