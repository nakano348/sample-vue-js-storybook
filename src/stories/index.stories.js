/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info'
import StoryRouter from 'storybook-vue-router';
import Vue from 'vue'
// Element UI
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css';

import Form from './../components/Form.vue';
import Result from './../components/Result.vue';

Vue.use(Element, {locale})

storiesOf('アプリケーションとして構築したもの', module)
  .addDecorator(StoryRouter({}, {
    routes: [
      { path: '/', component: Form },
      { path: '/result', name: 'result', component: Result },
    ]}))
  .add('入力フォーム+入力された値を表示する画面', () => ({
    template: '<router-view />'
  }));

storiesOf('Element UI', module)
  .addDecorator(VueInfoAddon)
  .add('テキストボックス', (() => ({
    template: '<el-input />'
  })))
  .add('日付入力', () => ({
    template:
    `<el-date-picker type="date"
      placeholder="日付"
      value-format="yyyy年MM月dd日">
    </el-date-picker>`
  }))
  .add('ラジオボタン', () => ({
    template: `
      <div>
        <el-radio v-model="value" label="departure">出発</el-radio>
        <el-radio v-model="value" label="arrival">到着</el-radio>
      </div>
      `,
    data() {
      return { value: 'departure' }
    }
  }))
  .add('ボタン', () => ({
    template: '<el-button type="primary">登録</el-button>'
  }))
  .add('テーブル', () => ({
    template: `
      <el-table :data="tableData">
        <el-table-column label="項目"
          prop="item">
        </el-table-column>
        <el-table-column label="値"
          prop="value">
        </el-table-column>
      </el-table>
    `,
    data() {
      return {
        tableData: [{
          item: '出発',
          value: '高円寺'
        }, {
          item: '到着',
          value: '新宿'
        }, {
          item: '日時',
          value: '2018年6月21日'
        }]
      }
    }
  }))

/* eslint-enable react/react-in-jsx-scope */
