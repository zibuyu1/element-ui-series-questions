<template>
  <div class="table_wrap">
    <ul class="table_list">
      <li>
        <p>合并行</p>
        <el-table
          v-for="(item, index) in tableData" :key="index"
          :data="item"
          :show-header="index===0"
          :span-method="objectSpanMethod"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </li>
      <li>
        <p>合并列</p>
        <el-table
          v-for="(item, index) in tableData" :key="index"
          :data="item"
          :show-header="index===0"
          :span-method="arraySpanMethod"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Tables extends Vue {
  private tableData: any[] = [
    [
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        length: 3,
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        length: 3,
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        length: 3,
      },
    ],
    [
      {
        date: '2016-06-04',
        name: '章三',
        address: '上海市闵行区',
        length: 2,
      },
      {
        date: '2016-06-04',
        name: '章三',
        address: '上海市闵行区',
        length: 2,
      },
    ],
    [
      {
        date: '2016-07-04',
        name: '里斯',
        address: '上海市松江区',
        length: 4,
      },
      {
        date: '2016-07-04',
        name: '里斯',
        address: '上海市松江区',
        length: 4,
      },
      {
        date: '2016-07-04',
        name: '里斯',
        address: '上海市松江区',
        length: 4,
      },
      {
        date: '2016-07-04',
        name: '里斯',
        address: '上海市松江区',
        length: 4,
      },
    ],
  ];
  private objectSpanMethod({ row, column, rowIndex, columnIndex }: any) {
    if (columnIndex === 0) {
      if (rowIndex % row.length === 0) {
        return {
          rowspan: row.length,
          colspan: 1,
        };
      } else {
        return {
          rowspan: 0,
          colspan: 0,
        };
      }
    }
  }
  private arraySpanMethod({ row, column, rowIndex, columnIndex }: any) {
    if (rowIndex % 2 === 0) {
      if (columnIndex === 0) {
        return [1, 2];
      } else if (columnIndex === 1) {
        return [0, 0];
      }
    }
  }
}
</script>
<style lang="scss">
.table_wrap{
  >.table_list{
    >li{
      margin-bottom: 30px;
      border-bottom: 1px solid #ebeef5;
      >p{
        margin-bottom: 10px;
      }
    }
  }
  .el-table::before{
    background: #fff;
  }
}
</style>

