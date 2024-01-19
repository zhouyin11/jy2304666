<template>
    <div class="login">
        <div class="box">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                :size="formSize" status-icon>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus';
import { loginApi } from '@/api/index';
import { useRouter } from 'vue-router';

const router = useRouter();
interface RuleForm {
    username: string
    password: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    username: 'demo',
    password: 'zh@hm#23',
})

const rules = reactive<FormRules<RuleForm>>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '5-10个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '5-10字符', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            loginApi(ruleForm).then((res: any) => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                router.push('/admin')
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}



</script>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
        width: 400px;
    }
}
</style>