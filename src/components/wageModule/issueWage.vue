<template>
    <div>
        <el-table :data="pageInfo.list" border style="width: 100%" stripe
        :default-sort = "{prop: 'wageId', order: 'descending'}" ref="multipleTable">
          <el-table-column v-for="item in props" :key="item.prop" :prop="item.prop" :label="item.label" 
          :width="item.width"> 
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
            :page-sizes="[3, 5, 8, 10]"
            :page-size="3"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageInfo.total">
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
          {prop:"wageId",label:"编号",width:"100"},
          {prop:"userName",label:"姓名",width:"100"},
          {prop:"deptId ",label:"部门",width:"100"},
          {prop:"baseWage",label:"基本工资",width:"100"},
          {prop:"subsidy",label:"餐补",width:"100"},
          {prop:"carAllowance",label:"车补",width:"100"},
          {prop:"housingSubsidy",label:"房补",width:"100"},
          {prop:"medicalInsurance",label:"医保",width:"100"},
          {prop:"socialSecurity",label:"社保",width:"100"},
          {prop:"taxes",label:"税金",width:"100"},
          {prop:"netPayroll",label:"实发工资",width:"100"},
          {prop:"netPay",label:"应发工资",width:"100"},
        ],
      };
        
    },
    methods:{
        //分页
        find(page=1,pageSize=3){
          let url="http://localhost:8088/wage/pageInfo?page="+page+"&pageSize="+pageSize;
          this.$axios.get(url).then(resp=>{
            this.list=resp.data;
          }).catch((ex)=>{
            console.log(ex);
          });
        },
        handleCurrentChange(page){
            this.find(page,this.pageInfo.pageSize);
        },
        handleSizeChange(pageSize){
            this.find(this.pageInfo.pageNum,pageSise);
        },
    },
    mounted(){
      this.find();
    },
    computed:{
        host(){
            return this.$axios.defaults.baseURL;
        }
    }
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