<template>
  <div class="process_container">
    <h3><b>維修流程</b></h3>
    <ul class="process">
      <li v-for="(item, index) in processList" :key="index">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
        <div>{{ item.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      processList: [
        {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3jubulRjUGwKNQYkCF8f1wFmh-qEW-mLeA&usqp=CAU',
          title: '第一站 登記',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum et ut incidunt repudiandae minima a doloremque mollitia animi, vero'
        },
        {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3jubulRjUGwKNQYkCF8f1wFmh-qEW-mLeA&usqp=CAU',
          title: '第一站 登記',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum et ut incidunt repudiandae minima a doloremque mollitia animi, vero'
        },
        {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3jubulRjUGwKNQYkCF8f1wFmh-qEW-mLeA&usqp=CAU',
          title: '第一站 登記',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum et ut incidunt repudiandae minima a doloremque mollitia animi, vero'
        }, {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3jubulRjUGwKNQYkCF8f1wFmh-qEW-mLeA&usqp=CAU',
          title: '第一站 登記',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum et ut incidunt repudiandae minima a doloremque mollitia animi, vero'
        }, {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3jubulRjUGwKNQYkCF8f1wFmh-qEW-mLeA&usqp=CAU',
          title: '第一站 登記',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum et ut incidunt repudiandae minima a doloremque mollitia animi, vero'
        }, {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3jubulRjUGwKNQYkCF8f1wFmh-qEW-mLeA&usqp=CAU',
          title: '第一站 登記',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum et ut incidunt repudiandae minima a doloremque mollitia animi, vero'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
ul{
  list-style: none;
}
.process_container{
  max-width: 940px;
  margin: 70px auto;
}
.process{
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  li{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 5px;
    img{
      width: 300px;
      height: 150px;
      object-fit: cover;
    }
  }
}

/* 響應式設計 */
@media (min-width:320px) and (max-width:767px) {
  .process_container{
    margin-top: 140px;
    }
}
</style>
