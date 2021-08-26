<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-badge color="secondary" multi-line>
        selectModel: {{ selectModel }}
        <br />
        selectModel2: {{ selectModel2 }}
        <br />
        selectOptions: {{ selectOptions }}
        <br />
        selectFilterOptions: {{ selectFilterOptions }}
        <br />
      </q-badge>
      <q-select
        filled
        v-model="selectModel"
        :options="selectFilterOptions"
        @filter="selectFilterFunction"
        @new-value="createSelectValue"
        options-dense
        use-input
        input-debounce="0"
        style="width: 150px"
        :error="showfalse && selectModel"
        error-message="'請輸入正確的值'"
      >
      </q-select>
      <br />
      <br />
      <q-select
        filled
        v-model="selectModel2"
        :options="selectFilterOptions"
        @filter="selectFilterFunction"
        @new-value="createSelectValue"
        options-dense
        use-input
        input-debounce="0"
        style="width: 150px"
        :error="showfalse && selectModel2"
        error-message="'請輸入正確的值'"
      >
      </q-select>
    </div>
    <div>
      <q-btn label="清除" @click="clear()"></q-btn>
      <q-btn label="儲存" @click="submit()"></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      selectOptions: [],
      selectFilterOptions: [],
      selectModel: "",
      selectModel2: "",
      showHintSelect: false,

      showfalse: false,
    };
  },
  methods: {
    clear() {
      this.selectModel = "";
      this.selectModel2 = "";
      this.showfalse = false;
    },
    submit() {
      if (this.selectModel.length < 1 || this.selectModel2.length < 1) {
        alert();
        this.showfalse = true;
      }
      if (this.selectModel && this.selectModel2) {
        alert(
          this.selectOptions +
            "/" +
            this.selectModel +
            " / " +
            this.selectModel2
        );
        this.selectModel = "";
        this.selectModel2 = "";
        this.showfalse = false;
      }
    },
    //-----------------------------------------------------------------------------------------------
    initializeSelectOptionsAndSelectFilterOptions() {
      // Initialize select options and filter options for testing
      // console.log("In initializeSelectOptionsAndSelectFilterOptions");
      this.selectOptions = ["xl", "xs", "lg"]; // Variant b for testing

      // console.log("selectOptions: ", this.selectOptions);

      // this.selectFilterOptions.push("xl"); // Variant a for testing
      // this.selectFilterOptions.push("xs"); // Variant a for testing
      // this.selectFilterOptions.push("lg"); // Variant a for testing

      // console.log("selectFilterOptions: ", this.selectFilterOptions);
    },
    //-----------------------------------------------------------------------------------------------
    createSelectValue(val, done) {
      console.log("In createSelectValue - val: ", val); // Undefined in case of the error!
      if (val.length > 1) {
        if (!this.selectOptions.includes(val)) {
          this.selectOptions.push(val);
          this.selectFilterOptions.push(val);
        }
        done(val, "toggle");
      }
    },
    //-----------------------------------------------------------------------------------------------
    selectFilterFunction(val, update) {
      update(() => {
        console.log("In selectFilterFunction für update - val: ", val); // val is (filter) text in input field

        if (val === "") {
          this.selectFilterOptions = this.selectOptions;
        } else {
          const needle = val.toLowerCase();
          this.selectFilterOptions = this.selectOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );

          console.log("selectFilterOptions: ", this.selectFilterOptions);
        }
      });
    },
    //-------------------------------------------------------------------------------------------------------
  }, // /methods:
  mounted: async function () {
    // this.selectModel.push("xl"); // Variant a for testing
    // this.selectModel.push("xs"); // Variant a for testing
    // this.selectModel.push("lg"); // Variant a for testing
    // this.selectModel = [ "xl", "xs", "lg" ]; // Variant b for testing
    // this.selectModel = []; // Variant c for testing
    this.initializeSelectOptionsAndSelectFilterOptions(); // Initialize select options and filter options
  }, // mounted:
};
</script>
