<template>
  <q-page padding>
    <q-input
      v-model="hex"
      :rules="[(val) => testIsColor(val) || 'plase enter a valid date']"
    >
      <template #prepend>
        <q-avatar :style="`background-color: ${hex}`"></q-avatar>
      </template>
      <template #append>
        <q-icon class="cursor-pointer" name="colorize">
          <q-popup-proxy>
            <q-color v-model="hex"></q-color>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-form @submit="handleSubmit">
      <q-color class="q-ma-lg" v-model="hex" name="color"></q-color>
      <q-btn type="submit" label="submit" class="q-mr-lg"></q-btn>
    </q-form>
  </q-page>
</template>

<script>
import { patterns } from "quasar";
export default {
  data() {
    return {
      hex: "#84ff80",
      testIsColor: patterns.testPattern.anyColor,
    };
  },
  methods: {
    // 表單 form
    handleSubmit(event) {
      console.log(event);
      const formData = new FormData(event.target);
      console.log(formData.entries());
      for (const keyValues of formData.entries()) {
        console.log(keyValues);
      }
      //或是這樣寫
      // for (const [key, value] of formData.entries()) {
      //   console.log(key);
      //   console.log(values);
      // }
    },
  },
};
</script>
