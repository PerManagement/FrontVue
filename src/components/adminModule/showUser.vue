<template>
    <div class="">
           <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="userid"
      label="员工编号"
      width="80"
      >
    </el-table-column>
    <el-table-column
      prop="realname"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="100">
    </el-table-column>
    <el-table-column
      prop="description"
      label="职位"
      width="120">
    </el-table-column>
    <el-table-column
      prop="deptname"
      label="部门名称"
      width="120">
    </el-table-column>
<el-table-column
      prop="locked" 
      label="状态" 
      width="200">
        <template slot-scope="scope">
 
 <div class="right">
    <el-tooltip v-if="scope.row.locked === 0" class="item" effect="dark" content="限制用户登录" placement="right-start">
      <el-button type="primary" plain size="mini">登录正常</el-button>
    </el-tooltip>

    <el-tooltip v-else class="item" effect="dark" content="解除用户限制" placement="right-start">
      <el-button type="danger" plain size="mini">限制登录</el-button>
    </el-tooltip>
    </el-tooltip>
  </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="createtimeString"
      label="入职时间"
      width="200">
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
        //          {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }
        ]
        }
    },
    components: {
        
    },
    mounted() {
        this.find();
    },
    methods: {
        find(){
            let url="admin/showUser";
            this.$axios.get(url).then( resp=> {
                console.log(resp.data.data);
                for(let i=0;i<resp.data.data.length;i++){
                    this.tableData.push({
                        userid:resp.data.data[i].userid,
                        realname:resp.data.data[i].realname,
                        description:resp.data.data[i].description, 
                        locked:resp.data.data[i].locked,
                        createtimeString:resp.data.data[i].createtimeString,
                        sex:resp.data.data[i].sex,
                        deptname:resp.data.data[i].department.deptname
                        });
            }
            }).catch( ex=>{
                console.log(ex);
            })
        },
        }
}
</script>

<style  scoped>

</style>
