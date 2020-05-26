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
      <el-button size="mini" type="danger">驳回</el-button>
      <el-button size="mini" type="primary" v-if="scope.row.existTask === '是'" disabled>同意</el-button>
      <el-button size="mini" type="primary" v-else >同意</el-button>
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
        ]
        }
    },
    components: {},
    methods: {
      filterTag(value,row) {
        return row.existTask === value;
      },
        find(){
            let url="admin/showDimission";
            this.$axios.get(url).then(resp=>{
                console.log(resp.data);
                for(let i=0;i<resp.data.data.list.length;i++){
                     this.tableData.push({dmissionId:resp.data.data.list[i].dmissionId,dimDate:resp.data.data.list[i].dimDate,username:resp.data.data.list[i].user.username,feedback:resp.data.data.list[i].feedback,position:resp.data.data.list[i].position,existTask:resp.data.data.list[i].existTask});
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
