<template>
    <div>
        <el-button type="success" icon="el-icon-document" @click="excel">导出</el-button>
        <el-table :data="pageInfo.list" border style="width: 100%" stripe @sort-change="changeSort"
        :default-sort = "{prop:'wageId',order:'descending'}" ref="multipleTable">
          <el-table-column v-for="item in props" :key="item.prop" :prop="item.prop" :label="item.label" 
          :width="item.width"> 
          </el-table-column>

          <!--操作列-->
          <el-table-column  label="操作" width="150px">
          <template slot-scope="scope"  >
              <el-button v-if="scope.row.wagestate=='已审核'" @click="update(scope.row)" type="text" size="small" width="190px">发放工资(已审批)</el-button>
              <el-tag v-else-if="scope.row.wagestate=='未审核'"  type="danger">{{scope.row.wagestate}}</el-tag>
              <el-button v-if="scope.row.wagestate=='驳回'"  type="info" @click="update3(scope.row)">再次申请</el-button>
          </template>
          </el-table-column> 
        </el-table>

        <!-- 分页 -->
        <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[3, 5, 8, 10]"
            :page-size="5"
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
        tag:true,
        page:1,
        pageInfo:{},
        props:[
          {prop:"wageid",label:"编号",width:"100"},
          {prop:"user.username",label:"姓名",width:"100"},
          {prop:"deptid",label:"部门",width:"100"},
          {prop:"basewage",label:"基本工资",width:"100"},
          {prop:"welfare.subsidy",label:"餐补",width:"100"},
          {prop:"welfare.carallwance",label:"车补",width:"100"},
          {prop:"welfare.housingsubsidy",label:"房补",width:"100"},
          {prop:"welfare.medicalinsurance",label:"医疗保险",width:"100"},
          {prop:"welfare.endowmentinsurance",label:"养老保险",width:"100"},
          {prop:"welfare.unemploymentinsurance",label:"生育保险",width:"100"},
          {prop:"welfare.birthinsurance",label:"工伤保险",width:"100"},
          {prop:"welfare.employmentinjuryinsurance",label:"失业保险",width:"100"},
          {prop:"welfare.reservedfunds",label:"公积金",width:"100"},
          {prop:"taxes",label:"税金",width:"100"},
          {prop:"netpay",label:"应发工资",width:"100"},
          {prop:"netpayroll",label:"实发工资",width:"100"},
          {prop:"wagestate",label:"审核状态",width:"100"},
          {prop:"wagedate",label:"发放时间",width:"180"},
          {prop:"issuer",label:"发放人",width:"100"},
        ],
      };
        
    },
    methods:{
        //分页
        find(page=1,pageSize=5){
          let url="wage/pageInfo?page="+page+"&pageSize="+pageSize;
          this.$axios.get(url).then(resp=>{
            console.log(resp.data);
            this.pageInfo=resp.data.data;
          }).catch((ex)=>{
            
            console.log(ex);
          });
        },
        excel(){
          let url="excel/export";
          this.$axios.get(url).then(resp=>{
              console.log("导出成功");
          }).catch(ex=>{
          this.$message.error('导出失败');
          });
        },

        // exportTable(){
        //   let url="excel/export";
        //   this.$axios({
        //       url: url,//获取文件流的接口路径
        //       method: 'post',
        //       data: {//请求参数
        //       "wageid":"13"
        //       },
        //       responseType: 'blob' // 表明返回服务器返回的数据类型 很重要！！
        //   }).then((res) => {
        //       //将文件流转成blob形式
        //       const blob = new Blob([res.data],{type: 'application/vnd.ms-excel'});
        //       let filename ='1.xls';
        //       //创建一个超链接，将文件流赋进去，然后实现这个超链接的单击事件
        //       const elink = document.createElement('a');
        //       elink.download = filename;
        //       elink.style.display = 'none';
        //       elink.href = URL.createObjectURL(blob);
        //       document.body.appendChild(elink);
        //       elink.click();
        //       URL.revokeObjectURL(elink.href); // 释放URL 对象
        //       document.body.removeChild(elink);
        //   }).catch(error => {
        //       this.$message.error('导出失败');
        //       // console.log(error)
        //   })
        // },

        update(row){
            console.log(row.wageid);
            console.log(this.$store.state.login.users.userRoles[0].id);
            let userid=this.$store.state.login.users.userRoles[0].id;
            let url="wage/updateWage?userid="+userid+"&wageid="+row.wageid;
            this.$axios.get(url).then(resp=>{           
                this.$message.success(resp.data.message);
                this.find(this.pageInfo.pageNum,this.pageInfo.pageSize);
            }).catch(ex=>{});

        },
        update3(row){
            console.log(row.wageid);
            let url="wage/updateState3?wageid="+row.wageid;
            this.$axios.get(url).then(resp=>{
            console.log(row.wageid);
           
                this.$message.success(resp.data.message);
                this.find(this.pageInfo.pageNum,this.pageInfo.pageSize);
            }).catch(ex=>{});

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