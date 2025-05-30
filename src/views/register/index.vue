<template>
    <div class="register">
        <div class="register-content">
            <p class="register-title">注册</p>
            <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="70px" class="demo-registerForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="registerForm.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" class="save-btn" @click="submitForm('registerForm')">保存</el-button>
                    <el-button type="primary" class="cancel-btn" @click="cancelRegister()">取消</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            registerForm:{
                name:'',
                password:''
            },
            rules:{
                name:[
                    {require:true,message:'请输入用户名',trigger:'blur'},
                    {min:3,max:5,message:'长度在3-5个字符',trigger:'blur'}
                ],
                password:[
                    {require:true,message:'请输入密码',trigger:'blur'},
                    {min:8,message:'长度至少8个字符',trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        submitForm(){
            this.$router.push('/login');            
        },
        cancelRegister(){
            this.$router.push('/login');
        }
    }
}
</script>