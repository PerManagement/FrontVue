<template>
    <div class="">
        <form>
        <el-row>
            <el-col :span="3" class="font1">开始时间：</el-col>
            <el-col :span="5">
                <el-date-picker
                v-model="overtim.overtimedate"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3" class="font1">结束时间：</el-col>
            <el-col :span="5">
                <el-date-picker
                v-model="overtim.stopovertime"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3" class="font1">加班原因：</el-col>
            <el-col :span="10">            
                <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="overtim.overtimreason"
                    :autosize="{ minRows: 2, maxRows: 8}"                    
                ></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
            <el-button type="success" round @click="saveOvertim">提交申请</el-button>
            </el-col>
        </el-row>
        </form>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            overtim:{}
        }
    },
    components: {},
    methods: {
        saveOvertim(){
            this.overtim.userid=this.$store.state.login.users.userRoles[0].userid;
            let url ="overtim/saveOvertim";
            console.log(this.overtim);
            this.$axios.post(url,this.overtim).then(resp => {
            this.$message.success(resp.data.message);
            this.overtim={};
            })
            .catch(ex => {
            console.log(ex);
            });
        }
    }
}
</script>

<style  scoped>
</style>
