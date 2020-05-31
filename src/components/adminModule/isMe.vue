<template>
    <div class="">
<el-upload
  action="http://localhost:8088/admin/userFileUrl"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :before-upload="beforeUpload"
  name="img"
  :auto-upload="false"
  >
  <i class="el-icon-plus"></i>
</el-upload>

<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :v-model="url" :src="dialogImageUrl" alt="">
</el-dialog>
<ElButton type="" @click="show">查看</ElButton>
    </div>
    
</template>

<script>
export default {
    name: "",
    data() {
        return {
            dialogImageUrl: '',
            url: '',
        dialogVisible: false
        }
    },
    components: {},
    methods: {
        beforeUpload(file){
            console.log(file);
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
          console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      show(){
          console.log(this.url);
      }
    }
}
</script>

<style  scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
