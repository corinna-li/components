<template>
  <q-page padding>
    <q-chip
      clickable
      label="篩選edible"
      v-model:selected="categories.edible"
      @update:selected="handleUpdateSlected"
    />

    <q-chip
      clickable
      label="篩選2poisonous"
      v-model:selected="categories.poisonous"
      @update:selected="handleUpdateSlected"
    />
    <q-chip
      clickable
      label="篩選3poisonous"
      removable
      v-model="categories.poisonous"
      @remove="handleRemove"
    />
    <div v-if="!plantsFiltered.length">please select a category</div>
    <q-list v-else bordered separator class="q-mt-lg">
      <q-item v-for="plant in plantsFiltered" :key="plant.label">
        <q-item-section>{{ plant.label }} </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  computed: {
    plantsFiltered() {
      return this.plants.filter((plant) => {
        return this.categories[plant.catogory];
      });
    },
  },
  data() {
    return {
      categories: {
        edible: false,
        poisonous: false,
      },
      plants: [
        {
          label: "kiki",
          catogory: "edible",
        },
        {
          label: "coco",
          catogory: "edible",
        },
        {
          label: "yoyo",
          catogory: "edible",
        },
        {
          label: "ququ",
          catogory: "poisonous",
        },
        {
          label: "asas",
          catogory: "poisonous",
        },
        {
          label: "zxzx",
          catogory: "poisonous",
        },
      ],
    };
  },
  methods: {
    handleUpdateSlected(value) {
      console.log(value);
    },
    handleRemove(value) {
      console.log("aa", value);
    },
  },
};
</script>
