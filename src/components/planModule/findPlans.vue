<template>
    <div>
        <el-table :data="pageInfo.list" border style="width: 100%" stripe @sort-change="changeSort"
        :default-sort = "{prop:'planid',order:'descending'}" ref="multipleTable">
          <el-table-column v-for="item in props" :key="item.prop" :prop="item.prop" :label="item.label" 
          :width="item.width"> 
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[3, 5, 8, 10]"
            :page-size="3"
            :total="pageInfo.total"
            @current-change="handleChangePage"
            @size-change="handleChangePageSize"
            >
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
      return {
        page:1,
        pageInfo:{},
        props:[
          {prop:"planid",label:"编号",width:"100"},
          {prop:"planname",label:"计划名称",width:"120"},
          {prop:"begintimeString",label:"开始日期",width:"200"},
          {prop:"enddateString",label:"结束日期",width:"200"},
        ],
      };
    },
    computed:{
        host(){
            return this.$axios.defaults.baseURL;
        }
    },
    methods:{
        //分页
        find(page=1,pageSize=6){
          let url="plan/findplans?page="+page+"&pageSize="+pageSize;
          this.$axios.get(url).then(resp=>{
            this.pageInfo=resp.data.data;
          }).catch((ex)=>{
            console.log(ex);
          });
        },
        handleChangePage(page){
             this.find(page,this.pageInfo.pageSize);
        },
        handleChangePageSize(pageSize){
          this.find(this.pageInfo.pageNum,pageSize);
        },

        changeSort({ column, prop, order }){
             console.group(column);
             console.log(prop);
             console.log(order); 
        },
    },
    mounted(){
      this.find();
    },
}
</script>

<style scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>