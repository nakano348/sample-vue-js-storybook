/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import StoryRouter from 'storybook-vue-router';
import { withKnobs, text, select } from '@storybook/addon-knobs/vue';
import '@storybook/addon-viewport';
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
  .addDecorator(withKnobs)
  .add('テキストボックス', () => {
    const placeHolder = text('プレースホルダ', '出発駅');
    return {
      template: `<el-input placeholder=${placeHolder}></el-input>`
    }
  })
  .add('日付入力', () => {

    const options = ['date', 'year', 'month', 'dates', 'datetime', 'datetimerange', 'daterange'];
    const types = select('タイプ', options, 'date', 'types');
    const placeHolder = text('プレースホルダ', '日付');
    return {
      template:
        `<el-date-picker type=${types}
          placeholder=${placeHolder}
          v-model="value"
          value-format="yyyy年MM月dd日">
        </el-date-picker>`,
      data() {
          return { value: '' }
        }
      }
    })
  .add('ラジオボタン', () => {
    const label1 = text('ラベル1', '出発');
    const label2 = text('ラベル2', '到着');
    return {
      template: `
        <el-form>
          <el-form-item label="種別">
            <el-radio v-model="value" label="departure">${label1}</el-radio>
            <el-radio v-model="value" label="arrival">${label2}</el-radio>
          </el-form-item>
        </el-form>
        `,
      data() {
        return { value: 'departure' }
      }
    }
  })
  .add('ボタン', () => {
    const options = ['primary', 'success', 'info', 'warning', 'danger'];
    const styles = select('スタイル', options, 'primary', 'button-styles');
    const label = text('ラベル', '登録');
    return {
      template: `<el-button type=${styles}>${label}</el-button>`
    }
  })
  .add('テーブル', () => {
    const header1 = text('1列目の見出し', '項目');
    const header2 = text('2列目の見出し', '値');
    return {
      template: `
        <el-table :data="tableData">
          <el-table-column label=${header1}
            prop="item">
          </el-table-column>
          <el-table-column label=${header2}
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
    }
  })
/* eslint-enable react/react-in-jsx-scope */
