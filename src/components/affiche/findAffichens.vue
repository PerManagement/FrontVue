<template>
    <div class="">
        <el-table
      ref="multipleTable"
      :data="pageInfo.list"
      style="width: 100%"
      stripe
      border
      :default-sort="{prop: 'scgrade', order: 'descending'}"
    >
    
      <el-table-column
        v-for="item in props"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.widht"
        sortable
      >
      </el-table-column>
      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="findAfficheById(scope.row)" type="text" size="small">详细信息</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            pageInfo:{},
            props:[
                {prop:'afficheid',lable:'编号',widht:'100'},
                {prop:'title',lable:'标题',widht:'300'},
                {prop:'releasetime',lable:'日期',widht:'200'},
                {prop:'user.username',lable:'发布人',widht:'100'},
            ],
        }
    },
    components: {},
    methods: {}
}
</script>

<style  scoped>
</style>
