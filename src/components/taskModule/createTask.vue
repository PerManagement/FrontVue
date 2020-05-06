<template>
    <div class="">
        <form>
        <el-row>
          <el-col :span="3" class="font1">任务名称</el-col>
          <el-col :span="10">
            <el-input v-model="task.taskname" ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="font1">任务描述</el-col>
          <el-col :span="10">
            <el-input v-model="task.taskdesc" ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="font1">开始时间</el-col>
          <el-col :span="10">
          <el-col :span="10">
            <el-date-picker
            v-model="task.begindate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="font1">完成时间</el-col>
          <el-col :span="10">
          <el-col :span="10">
            <el-date-picker
            v-model="task.enddate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="font1">实施人</el-col>
          <el-col :span="10" style="text-align:left;padding-top:10px;">
            <el-select v-model="task.userid" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.userid"
                :label="item.realname"
                :value="item.userid">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="font1">任务状态</el-col>
          <el-col :span="10" style="text-align:left;padding-top:10px;">
            未实施
          </el-col>
        </el-row>
        </form>
        <el-row>
          <el-col :span="10" :offset="6">
            <el-button>取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            task:{},
            user:{},
            imageUrl:'',
            options: [],
        }
    },
    computed:{
        host(){
            return this.$axios.defaults.baseURL;
        }
    },
    components: {},
    methods: {
      //文件上传后的回调函数
        handleSuccess(response,file,fileList){
            //response 上传之后的返回值
            this.imageUrl=this.host+response;

            //将地址保存user属性中，数据库表中直接存储的是文件名，没有upload目录
            //返回的是/upload/xxxx.xx
            this.user.photo=response.substring(response.lastIndexOf("/")+1);

            //校验的
            this.ruleForm.photo=response.substring(response.lastIndexOf("/")+1);
        },
        //文件上传之前，调用该方法，如果返回false终止文件上传
        handleBeforeUpload(file){
            //只能上传png和jpg文件
            let name=file.name;
            let extList=['png','jpg'];
            let ext=name.substring(name.lastIndexOf(".")+1);
            if(!extList.includes(ext)){
                this.$message.error("这个文件类型不能上传");
                return false;
            }

            //上传文件大小不能大于50k
            if(file.size>(1024*500)){
                this.$message.error("文件不能大于50k");
                return false;
            }
        },
        findExecutor(){
          let url="task/findExecutor";
          this.$axios.get(url).then(resp=>{
            console.log("findExecutor:"+resp.data.data);
            this.options=resp.data.data;
          }).catch((ex)=>{
            console.log(ex);
          });
        },
        save(){
          let url="task/save";
            this.$axios.post(url,this.task).then(resp=>{
                this.$message.success(resp.data.message);
                this.task={};
            }).catch(ex=>{console.log(ex);});
        },
    },
    mounted() {
      this.findExecutor();
    },
}
</script>

<style  scoped>
  .avatar-uploader-icon, .avatar {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon:hover, .avatar:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
