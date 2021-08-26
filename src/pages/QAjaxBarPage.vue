<template>
  <q-page padding>
    <q-ajax-bar
      color="purple"
      size="18px"
      position="top"
      reverse
      skip-hijack
      ref="bar"
    ></q-ajax-bar>

    <q-btn
      @click="fakeAjaxRequest"
      label="click me!"
    ></q-btn>

    <pre>{{result}}</pre>



    <!-- <div>
      <q-toggle v-model="drawerState" />
    </div> -->

  </q-page>
</template>

<script>
import { api } from 'boot/axios'

import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
  name: 'PageName',
  data () {
    return {
      result: null
    }
  },

//這是可以的
  // setup () {
  //   const $store = useStore()

  //   const drawerState = computed({
  //     get: () => $store.state.example.drawerState,
  //     set: val => {
  //       $store.commit('example/updateDrawerState', val)
  //     }
  //   })

  //   return {
  //     drawerState
  //   }
  // },
//這是可以的 


  created() {
    const accessToken = "";
    // const accessToken = this.$store.getters["evaluationstore/tokenState"].access_token || "";
    // if (accessToken === "") {
      console.log("app vue coco", accessToken);
      this.$store.dispatch("example/gettoken").then(() => {
        // alert("手機板");
          console.log("抓token",);
      });
    // }
  },




  methods: {
    fakeAjaxRequest() {
      //上課的例子
      // this.$axios.get('https://jsonplaceholder.typicode.com/posts')
      // .then(response => {
      //   this.result = response.data
      // });
      //上課的例子


      // this.$axios.post('http://demo.every8d.com.tw/DS_backend/evaluation/api/auth/token') //這個可以
      api.post('/auth/token')
      .then(response => {
        this.result = response.data
        console.log( this.result)
      });


      // const bar = this.$refs.bar;
      // bar.start();
      // setTimeout(() =>{
      //   bar.stop()
      // },3000);


    }
    
  }
}
</script>
