<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="item"
      label="項目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="value"
      label="値"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          item: '出発',
          value: this.$route.params.from
        }, {
          item: '到着',
          value: this.$route.params.to
        }, {
          item: '日時',
          value: this.$route.params.date + ' ' + this.$route.params.type
        }]
      }
    }
  }
</script>
