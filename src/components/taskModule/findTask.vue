<template>
    <div>
    <div class="block" style="padding-bottom:10px">
          <el-date-picker
            value-format="yyyy-MM-dd"  
            v-model="begindate"
            align="right"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
          &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
          <el-date-picker
            value-format="yyyy-MM-dd"  
            v-model="enddate"
            align="right"
            type="date"
            placeholder="选择日期">
          </el-date-picker>&nbsp;&nbsp;&nbsp;
          <el-button type="primary" icon="el-icon-search" @click="find()">搜索</el-button>
        </div>

        <el-table :data="pageInfo.list" border style="width: 100%" stripe @sort-change="changeSort"
        :default-sort = "{prop:'taskid',order:'descending'}" ref="multipleTable">
          <el-table-column v-for="item in props" :key="item.prop" :prop="item.prop" :label="item.label" 
          :width="item.width"> 
          </el-table-column>
          <!--操作列-->
        <el-table-column
        label="操作">
        <template slot-scope="scope">
            <el-button  @click="update(scope.row)"
            type="text" size="small">
                反馈信息
            </el-button>
        </template>
        </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="block">
        <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[3, 6, 8, 10]"
            :page-size="6"
            :total="pageInfo.total"
            @current-change="handleChangePage"
            @size-change="handleChangePageSize"
            >
        </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        page:1,
        pageInfo:{},
        begindate:'',
        enddate:'',
        props:[
          {prop:"taskid",label:"编号",width:"100"},
          {prop:"taskname",label:"任务名称",width:"120"},
          {prop:"user.realname",label:"实施人",width:"120"},
          {prop:"begindateString",label:"开始日期",width:"120"},
          {prop:"enddateString",label:"结束日期",width:"200"},
          {prop:"status",label:"状态",width:"200"},
        ],
        updateTag:false,
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
          let url="task/findTask?page="+page+"&pageSize="+pageSize+"&begindate="+this.begindate+"&enddate="+this.enddate;
          this.$axios.get(url).then(resp=>{
            console.log(resp.data.data);
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