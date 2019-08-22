开发中页面有表格的话，不可或缺的都会涉及一些别表格的合并操作。
下面来说说我是如何来动态合并表格的行或列的。 [点击查看源码](https://github.com/zibuyu1/element-ui-series-questions)。
> 表格合并

看图说话
![table.png](https://upload-images.jianshu.io/upload_images/9500654-936f6635370b1ec8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
后台传给前台的是一个二维数组形式的数据，遍历这个二维数组，生成多个表格，合理的使用表格的show-header属性，来显示和隐藏表头，然后再合并每个表格。合并表格时用到了列表数据里的length属性，这个字段很重要，属性值是列表的长度。
![length.png](https://upload-images.jianshu.io/upload_images/9500654-f6be154d8a18e271.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

通过这个length来实现表格动态合并行
![methods.png](https://upload-images.jianshu.io/upload_images/9500654-4d53b9b93323c969.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 远程排序

```html
<el-table
  :data="tableData1"
  border
  @sort-change="sortChange"
  :default-sort = "{
    prop: 'date',
    order: 'descending',
  }"
  style="width: 100%">
  <el-table-column
  prop="date"
  label="日期"
  sortable="custom"
  :sort-orders="['ascending', 'descending']"
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
```

```javascript
private sortChange({ column, prop, order }: any) {
    const defaultSort = {
      prop, // 排序字段
      order, // 排序类型
    };
    // 此处调用接口，并把排序字段和排序类型传给后端
    // ...
  }
```

1. 对应列是否可以排序，通过添加sortable字段来控制，如果希望是远程排序，则该字段的值设置为'custom'；
2. 排序需要监听 Table 的 sort-change 事件，通过该事件能拿到当前排序的字段和排序的类型；
3. sort-orders属性设置排序的类型，默认有'ascending'，'descending'，null，分别代表升序、降序、不排序；
4. default-sort属性设置默认排序字段和默认排序类型

> 动态展开某些行

```html
<el-table
  :data="tableData1"
  row-key="id"
  :row-class-name="setClassName"
  style="width: 100%">
  <el-table-column
  type="expand">
  <template slot-scope="props">
    我是扩展内容：{{props.row.remark}}
  </template>
  </el-table-column>
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
```

```javascript
private setClassName({row, index}: any){
    // 通过自己的逻辑返回一个class或者空
    return row.expand ? 'expand' : '';
  }
```

```css
.expand .el-table__expand-column .cell {
  display: none;
}
```

1. 渲染树形数据时，必须要指定 row-key；
2. 通过 row-class-name 属性来设置行样式；

[element-ui+vue-cli3.0系列问题一：el-upload上传组件](https://www.jianshu.com/p/24dee30a21de)
[element-ui+vue-cli3.0系列问题二：表格合并,远程排序，动态展开行](https://www.jianshu.com/p/9a74554c27b6)
[element-ui+vue-cli3.0系列问题三：el-tooltip实现文本溢出省略号处理](https://www.jianshu.com/p/2e623d1ff91e)