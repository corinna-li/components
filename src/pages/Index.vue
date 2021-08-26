<template>
  <q-page class="flex flex-center">
    home
    <q-input
      v-model="name"
      label="name"
      outlined
      color="red"

      >
      <template v-slot:append>
        <div>
          <q-icon name="person"></q-icon>
        </div>
      </template>
    </q-input>
    <q-btn
      color="blue"
      push
      icon="flag"
      @click="$q.notify({
        message: 'cococ',
        color: 'primary',
        position: 'center',
        icon: 'thumb_up'
      })"
    >

    </q-btn>
  </q-page>
</template>

<script>

export default({
  name: 'PageIndex',
  data(){
    return {
      name:'',
    }
  }
})
</script>
