<template>
  <!-- <q-page padding>
    <q-btn>
      <label class="custom-file-upload">
        匯入xls
        <input
          type="file"
          accept=".xls,.xlsx"
          class="hidden"
          @change="readExcel($event)"
        />
      </label>
    </q-btn>

    <br />
    <div class="bg-grey">
      <q-input
        type="text"
        outlined
        dense
        bg-color="white"
        class="form-control col"
        v-model="element"
        placeholder="請輸入位置"
        style="width: 150px"
      />
    </div>
  </q-page> -->

  <q-page padding>
    <q-btn>
      <label class="custom-file-upload">
        匯入xls
        <input
          ref="file"
          type="file"
          accept=".xls,.xlsx"
          class="hidden"
          @change="onFIleChange"
        />
      </label>
    </q-btn>
    {{ rows }}
  </q-page>
</template>

<script>
import readXlsxFile from "read-excel-file";

export default {
  data() {
    return {
      file: null,
      rows: null,
    };
  },
  methods: {
    onFIleChange(e) {
      this.file = e.target.files[0];
      let xlsxfile = e.target.files ? e.target.files[0] : null;
      console.log(this.file);

      let arr = [];

      readXlsxFile(xlsxfile).then((rows) => {
        console.log("rows:", rows);
        arr = [].concat.apply([], rows); //二維變一維
        arr.shift(); // 刪掉第一個

        arr.forEach((element, index) => {
          item = {
            text: element,
            id: index + arrLength,
          };
        });
        this.rows = arr;
        console.log("arr:", this.rows);
      });
    },
  },
};

// import XLXS from "xlsx";

// export default {
//   // name: 'PageName',
//   data() {
//     return {
//       msg: "",
//       upload_file: "",
//       lists: [],
//       element: "",
//     };
//   },
//   methods: {
//     readExcel(e) {
//       // 读取表格文件
//       // let that = this;
//       const files = e.target.files;
//       // if (files.length <= 0) {
//       //   return false;
//       // } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
//       //   this.$message({
//       //     message: "請上傳xls或者xlsx格式",
//       //     type: "warning",
//       //   });
//       //   return false;
//       // } else {
//       //   // 更新获取文件名
//       //   that.upload_file = files[0].name;
//       // }
//       const fileReader = new FileReader();
//       fileReader.onload = (ev) => {
//         try {
//           const data = ev.target.result;
//           const workbook = XLXS.read(data, {
//             type: "binary",
//           });
//           console.log("aaaaaaa", workbook);
//           const wsname = workbook.SheetNames[0]; // 取第一张表名稱
//           const worksheet = workbook.Sheets[wsname]; // 只能通过工作表名称来获取指定工作表
//           let addArr = Object.keys(worksheet).map((key) => {
//             // v是读取单元格的原始值
//             return worksheet[key].v;
//           });
//           let loactionsArr = addArr.slice(2, addArr.length - 1);
//           console.log(loactionsArr);
//         } catch (e) {
//           return false;
//         }
//       };
//       fileReader.readAsBinaryString(files[0]);
//     },
//   },
// };
</script>
