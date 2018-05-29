<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="出発">
      <el-input v-model="form.from"></el-input>
    </el-form-item>

    <el-form-item label="到着">
      <el-input v-model="form.to"></el-input>
    </el-form-item>

    <el-form-item label="日付">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="日付"
        value-format="yyyy年MM月dd日">
      </el-date-picker>
    </el-form-item>

    <el-form-item label="種別">
      <el-radio v-model="form.type" label="出発">出発</el-radio>
      <el-radio v-model="form.type" label="到着">到着</el-radio>
      <el-radio v-model="form.type" label="始電">始電</el-radio>
      <el-radio v-model="form.type" label="終電">終電</el-radio>
    </el-form-item>

    <el-form-item>
      <router-link
        :to="{
          name: 'result',
          params: {
            from: form.from,
            to: form.to,
            date: form.date,
            type: form.type,
            }
          }">
        <el-button type="primary">登録</el-button>
      </router-link>
      <el-button>リセット</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        from: '高円寺',
        to: '新宿',
        type: '出発',
        date: ''
      }
    }
  }
}
</script>
