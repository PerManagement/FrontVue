<template>
    <div class="">
   

<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

 <el-form-item label="用户名：" prop="username">
    <el-input type="text"  maxlength="10" show-word-limit  v-model="ruleForm.username" autocomplete="on"></el-input>
  </el-form-item>
  <el-form-item label="密码：" prop="password">
    <el-input type="password"  maxlength="10"  v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码：" prop="checkPass">
    <el-input type="password" maxlength="10" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄：" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item label="学历：" prop="education">
 <el-select v-model="ruleForm.education" placeholder="请选择" autocomplete="off">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</el-form-item>
<el-form-item label="性别：">
<el-radio v-model="ruleForm.sex" label="男">男</el-radio>
  <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
</el-form-item>

 <el-form-item
    prop="email"
    label="邮箱："
    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>

<el-form-item label="地址：" prop="address" style="width: 630px;">
 <el-cascader
 style="margin-left: 0px;"
      size="large"
      :options="ruleForm.optionsChina"
      v-model="ruleForm.selectedOptions"
      @change="handleChange">
    </el-cascader>
    <el-input maxlength="30" v-model="ruleForm.address" style="width: 250px;" placeholder="请填写具体位置"></el-input>
</el-form-item>


<el-form-item label="部门" prop="deptid">
 <el-select v-model="ruleForm.education" placeholder="请选择" autocomplete="off">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</el-form-item>


   <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

    </div>
</template>
<script>
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
// 1.provinceAndCityData是省市二级联动数据（不带“全部”选项）
// 2.regionData是省市区三级联动数据（不带“全部”选项）
// 3.provinceAndCityDataPlus是省市区三级联动数据（带“全部”选项）
// 4.regionDataPlus是省市区三级联动数据（带“全部”选项）
// 5."全部"选项绑定的value是空字符串""
// 6.CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
// 7.TextToCode是个大对象，属性是汉字，属性值是区域码 用法例如：TextToCode['北京市'].code输出110000,TextToCode['北京市']['市辖区'].code输出110100,TextToCode['北京市']['市辖区']['朝阳区'].code输出110105
export default {
    data() {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };

       var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      
      var validateEducation = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择学历'));
        } 
         callback();
      };
      var validateAddress = (rule, value, callback) => {
          console.log(value);
        if (value === '' || this.province === '' || this.city==='' || this.area==='') { 
            console.log(this.province);
          callback(new Error('请选择并填入具体地址'));
        } 
         callback();
      };
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } 
         callback();
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
           username:'',
            password:'',
          checkPass: '',
          age: '',
          education: '',
          sex:'男',
           email: '',
           optionsChina: regionDataPlus,
        selectedOptions: [],
        province:'',
        city:'',
        area:'',
        address:'',
        },
        options: [{
          value: '中专',
          label: '中专'
        }, {
          value: '高中',
          label: '高中'
        }, {
          value: '大专',
          label: '大专'
        }, {
          value: '大学',
          label: '大学'
        }, {
          value: '研究生',
          label: '研究生'
        }, {
          value: '硕士',
          label: '硕士'
        }, {
          value: '博士',
          label: '博士'
        }],
        rules: {
            education:[
                { validator: validateEducation, trigger: 'blur' }
            ],
            username: [
                { validator: validateUserName, trigger: 'blur' }
            ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          address: [
              { validator: validateAddress, trigger: 'blur' }
          ],
        }
      };

    },
    components: {},
    methods: {
        //三级联动
        handleChange (value) {
        this.province=CodeToText[value[0]];
        this.city=CodeToText[value[1]];
        this.area=CodeToText[value[2]];
      },
         submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style  scoped>
.el-form-item{
    width: 300px;
}
</style>
