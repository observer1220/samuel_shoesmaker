<template>
  <div class="solution">
      <div class="flow_chart">
        <h3><b>服務項目與價目表</b></h3>
        <el-select v-model="selected">
          <el-option label="男鞋維修" value="menList"></el-option>
          <el-option label="女鞋維修" value="womenList"></el-option>
          <el-option label="特殊鞋款" value="specialList"></el-option>
          <el-option label="皮包維修" value="bagList"></el-option>
        </el-select>
        <div class="priceList">
          <table class="price_table" v-if="selected == 'menList'">
            <tr>
              <th>維修項目</th>
              <th>收費標準</th>
              <th>工作天數</th>
            </tr>
            <tr v-for="(item, index) in menList" :key="index" @mouseover="hovered = item.id" @mouseleave="hovered = null">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.day }}</td>
            </tr>
          </table>
          <table  class="price_table" v-if="selected == 'womenList'">
            <tr>
              <th>維修項目</th>
              <th>收費標準</th>
              <th>工作天數</th>
            </tr>
            <tr v-for="(item, index) in womenList" :key="index" @mouseover="hovered = item.id" @mouseleave="hovered = null">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.day }}</td>
            </tr>
          </table>
          <table  class="price_table" v-if="selected == 'specialList'">
            <tr>
              <th>維修項目</th>
              <th>收費標準</th>
              <th>工作天數</th>
            </tr>
            <tr v-for="(item, index) in specialList" :key="index" @mouseover="hovered = item.id" @mouseleave="hovered = null">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.day }}</td>
            </tr>
          </table>
          <table  class="price_table" v-if="selected == 'bagList'">
            <tr>
              <th>維修項目</th>
              <th>收費標準</th>
              <th>工作天數</th>
            </tr>
            <tr v-for="(item, index) in bagList" :key="index" @mouseover="hovered = item.id" @mouseleave="hovered = null">
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
      selected: 'menList',
      menList: [
        {
          id: 1,
          name: '男生皮鞋天皮',
          price: '$300',
          day: '3~7天'
        },
        {
          id: 2,
          name: '男皮鞋前掌防滑',
          price: '$400',
          day: '3~7天'
        },
        {
          id: 3,
          name: '男鞋染色保養',
          price: '$800-$1,000',
          day: ''
        },
        {
          id: 4,
          name: '男運動鞋脫膠重新黏',
          price: '$450',
          day: ''
        },
        {
          id: 5,
          name: '男生鞋底環保材質氧化換底',
          price: '$1300起',
          day: ''
        },
        {
          id: 6,
          name: '男皮鞋脫膠重新黏(需換邊條)',
          price: '$600起',
          day: ''
        },
        {
          id: 7,
          name: '男鞋跟更換',
          price: '$500起',
          day: ''
        },
        {
          id: 8,
          name: '男鞋更換鞋墊',
          price: '$350起(加大尺碼另算費用)',
          day: ''
        }
      ],
      womenList: [
        {
          id: 9,
          name: '女生高跟天皮',
          price: '$150',
          day: '3~7天'
        },
        {
          id: 10,
          name: '女跟鞋前掌防滑',
          price: '$300',
          day: ''
        },
        {
          id: 11,
          name: '女鞋染色保養',
          price: '$800-1,000',
          day: ''
        },
        {
          id: 12,
          name: '女運動鞋脫膠重新黏',
          price: '$400',
          day: ''
        },
        {
          id: 13,
          name: '女生鞋底環保材質氧化換底',
          price: '$1000起',
          day: ''
        },
        {
          id: 14,
          name: '女鞋跟更換',
          price: '$500起',
          day: ''
        },
        {
          id: 15,
          name: '女鞋更換鞋墊',
          price: '$250起(加大尺碼另算費用)',
          day: ''
        }
      ],
      specialList: [
        {
          id: 16,
          name: 'NKIE鞋款更換鞋底',
          price: '$3000起(AIR FORCE系列)',
          day: ''
        },
        {
          id: 17,
          name: '愛迪達鞋款更換鞋底',
          price: '$3000起',
          day: ''
        },
        {
          id: 18,
          name: '喬丹鞋款更換大底',
          price: '$3000起',
          day: ''
        },
        {
          id: 19,
          name: 'NB鞋款底台氧化更換材料',
          price: '$1000起',
          day: ''
        },
        {
          id: 20,
          name: 'NB鞋款膠片硬化更換',
          price: '$1200起',
          day: ''
        },
        {
          id: 21,
          name: '男女鞋及童鞋魔術貼更換',
          price: '$150起',
          day: ''
        },
        {
          id: 22,
          name: '紅翼長靴更換大底',
          price: '$3000起',
          day: ''
        },
        {
          id: 23,
          name: '登山鞋環保材質氧化更換大底',
          price: '$1500起(可客製化黃金大底3500起)',
          day: ''
        },
        {
          id: 24,
          name: '全品牌鞋型安裝防滑膠片',
          price: '$800起',
          day: ''
        },
        {
          id: 25,
          name: '勃肯鞋換底',
          price: '$800',
          day: ''
        },
        {
          id: 26,
          name: '客製化改鞋',
          price: '設計費用與客戶協調',
          day: ''
        }
      ],
      bagList: [
        {
          id: 27,
          name: '平貼提把',
          price: '$1000起',
          day: ''
        },
        {
          id: 28,
          name: 'LV圓提把',
          price: '$2500起',
          day: ''
        },
        {
          id: 28,
          name: '以長度計價',
          price: '$1500起',
          day: ''
        },
        {
          id: 29,
          name: '拉鍊頭更換',
          price: '$300起',
          day: ''
        },
        {
          id: 30,
          name: '內裡更換',
          price: '$2000起(以包包大小)',
          day: ''
        },
        {
          id: 31,
          name: '更換水桶包皮繩',
          price: '$1000起',
          day: ''
        },
        {
          id: 32,
          name: '更換提片',
          price: '$500',
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
