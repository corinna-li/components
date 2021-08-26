<template>
  <q-page padding>
    
    <q-btn
      @click="goToHome"
      to="/"
    >
      <q-avatar
      color="blue"
      text-color="white"
    >
      <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="">
    </q-avatar>
      <!-- funny -->
    </q-btn>
      <br>
      <hr>
      <br>
    <form action="">
      <q-btn
        icon="train"
        color="green"
        type="submit"
        to="/"
      ></q-btn>
    </form>

    <br>
      <hr>
      <br>

    <q-btn
        icon="train"
        color="green"
        type="a"
        fab
        href="https://google.com"
      ></q-btn>
      <br>
      <hr>
      <br>
<!-- router-link -->
    <router-link
      to=""
      v-slot="props"  
    >
      <q-btn
        v-bind="buttonProps(props)"
        label="homehomehomehomehomehomehomehome"
        no-wrap
        style="width:100px"
      ></q-btn>
    </router-link>
    <br>
      <hr>
      <br>

<!-- 年在某一處 -->
    <q-page-sticky
      position="bottom"
      :offset="[16,16]"
    >
    <q-btn
        icon="add"
        color="orange"
        fab-mini
      ></q-btn>
    
    </q-page-sticky>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  methods:{
    buttonProps({ isExactActive }){
      return{
        color: isExactActive ? 'red' : 'green'
        
      }
    },
    goToHome (event, go){
      event.navigate = false;
      setTimeout(()=>{
        go();
      },2000)
    }
  }
}
</script>
