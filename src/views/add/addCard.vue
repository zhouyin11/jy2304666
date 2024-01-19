<template>
  <el-container style="height: 100vh;width: 100vw;">
    <el-header style="background-color: #fff;height: 60px;line-height: 60px;"><el-icon>
        <Back />
      </el-icon>返回 | <span>新增月卡</span> </el-header>
    <el-main style="background-color: #f1f1f1">
      <div class="a" style="background-color: #fff;padding: 20px;">
        <p>车辆信息</p>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="80px" :size="formSize" status-icon
          :inline="true">
          <el-form-item label="车主姓名" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="联系方式" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="车牌号码" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="车辆品牌" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
        </el-form>
      </div>
      <div class="b" style="background-color: #fff;padding: 20px;margin-top: 50px;">
        <p>最新一次月卡缴费信息</p>
        

        <el-form :model="form" label-width="120px" :inline="true" :rules="rules">
          <el-form-item label="有效日期">
            <el-time-picker v-model="value1" is-range range-separator="至" start-placeholder="开始时间"
          end-placeholder="结束时间" />

          </el-form-item>
          <el-form-item label="支付金额">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="支付方式">
            <el-select v-model="form.region" placeholder="请选择" style="width: 200px;">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          
        </el-form>
      </div>
    </el-main>
    <el-footer style="background-color: #fff;text-align: center;padding: 20px;box-sizing: border-box;">
      <el-button>重置</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">确定</el-button>

    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { Back } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}


const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<style lang="scss" scoped></style>