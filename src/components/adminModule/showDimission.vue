<template>
    <div class="">
    <span style="font-size:30px;">离职人员列表</span>
     <el-table
    :data="tableData"
    ref="filterTable"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item style="color:red;" label="离职反馈：">
            <span>{{ props.row.feedback }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column style="width:20%;"
      label="编号"
      prop="dmissionId">
    </el-table-column>
    <el-table-column
      label="申请时间"
      prop="dimDate">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="username">
    </el-table-column>
    <el-table-column
      label="职位"
      prop="position">
    </el-table-column>
    <el-table-column
      label="用户编号"
      prop="userid" disabled>
    </el-table-column>


     <el-table-column
      prop="existTask" 
      label="存在任务" 
      width="100" 
      :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]" 
    :filter-method="filterTag" 
    filter-placement="bottom-end" >
        <template slot-scope="scope">
        <el-link v-if="scope.row.existTask === '是' " type="primary">需要交接</el-link>
        <span v-else type="info">否</span>
        
      </template>
    </el-table-column>
   
     <el-table-column label="操作">
     <template slot-scope="scope">
      <el-button size="mini" type="danger" @click.native.prevent="openNo(scope.$index,tableData)">驳回</el-button>
      <el-button size="mini" type="primary" v-if="scope.row.existTask === '是'" disabled>同意</el-button>
      <el-popover v-else
  placement="top"
  width="160"
  v-model="visible">
  <p>确定批准离职吗？</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
    <el-button type="primary" size="mini" @click="yes(scope.$index,tableData)">确定</el-button>
  </div>
  <el-button size="mini" type="primary"  slot="reference">同意</el-button>
</el-popover>

     <!-- <el-button size="mini" type="primary" v-else @click.native.prevent="yes(scope.$index,tableData)">同意</el-button>-->

      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
             tableData: [
                 //{
        //   id: '12987122',
        //   name: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   shopId: '10333'
        // }, 
        ],
        dimission:{},
        visible: false,
        }
    },
    components: {},
    methods: {
         openNo(index, rows) {
        this.$prompt('请输入驳回理由', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'textarea',
        }).then(({ value }) => {
            this.dimission.rejectReason=value;
          this.no(index, rows);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作',
            duration: 1000,
          });       
        });
      },
        no(index, rows){
            this.dimission.dmissionId=rows[index].dmissionId;
             this.dimission.userid=rows[index].userid;
            let url="admin/reject";
            this.$axios.post(url,this.dimission).then(resp=>{
                if(resp.data.message=='操作成功'){
             this.$notify.success({
          title: '成功',
          message: '操作成功',
          showClose: false,
          duration: 1000,
        });
            rows.splice(index,1);
                }else{
                      this.$notify.error({
          title: '未知错误。。。',
          message: resp.data.message,
          showClose: false,
          duration: 1000,
        });
                }
            }).catch(ex => {
            console.log(ex);
            });
            
            
        },
        yes(index, rows){
            this.visible = false;
            this.dimission.dmissionId=rows[index].dmissionId;
             this.dimission.userid=rows[index].userid;
            let url="admin/ratify";
            this.$axios.post(url,this.dimission).then(resp=>{
                if(resp.data.message=='操作成功'){
             this.$notify.success({
          title: '成功',
          message: '操作成功',
          showClose: false,
          duration: 1000,
        });
            rows.splice(index,1);
                }else{
                      this.$notify.error({
          title: '未知错误。。。',
          message: resp.data.message,
          showClose: false,
          duration: 1000,
        });
                }
            }).catch(ex => {
            console.log(ex);
            });
        },
      filterTag(value,row) {
        return row.existTask === value;
      },
        find(){
            let url="admin/showDimission";
            this.$axios.get(url).then(resp=>{
                console.log(resp.data);
                for(let i=0;i<resp.data.data.list.length;i++){
                     this.tableData.push({dmissionId:resp.data.data.list[i].dmissionId,
                     dimDate:resp.data.data.list[i].dimDateString,
                     username:resp.data.data.list[i].user.username,
                     feedback:resp.data.data.list[i].feedback,
                     position:resp.data.data.list[i].position,
                     existTask:resp.data.data.list[i].existTask,
                     userid:resp.data.data.list[i].userid});
                }
            }).catch(ex =>{

            });
        }
    },
    mounted() {
        this.find();
    },
}
</script>

<style  scoped>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 80%;
  }
</style>
