<template>
  <el-form :inline="true" :model="query" class="demo-form-inline">
    <el-form-item label="车牌号码">
      <el-input v-model="query.carNumber" placeholder="请输入内容" />
    </el-form-item>

    <el-form-item label="车主姓名">
      <el-input v-model="query.personName" placeholder="请输入内容" />
    </el-form-item>


    <el-form-item label="状态">
      <el-select v-model="query.cardStatus" placeholder="全部">
        <el-option label="有效" value="1" />
        <el-option label="无效" value="0" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>

  <el-button type="primary" @click="add">添加月卡</el-button>
  <el-button>批量删除</el-button>

  <el-table :data="list" style="width: 100%; margin-bottom: 20px" row-key="id">
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" label="序号" />
    <el-table-column prop="personName" label="车主姓名" />
    <el-table-column prop="carNumber" label="车牌号码" />
    <el-table-column prop="carBrand" label="车辆品牌" />
    <el-table-column prop="totalEffectiveDate" label="剩余有效天数" />
    <el-table-column prop="cardStatus" label="状态">
      <template #default="scope">
        <p v-if="scope.row.cardStatus == 0">有效</p>
        <p v-else>无效</p>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template #default>
        <el-button link type="primary" size="small">续费</el-button>
        <el-button link type="primary" size="small">查看</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination v-model:current-page.sync="query.page" v-model:page-size.sync="query.pageSize" :page-sizes="[1, 3, 5, 10]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total" @size-change="getList" @current-change="getList" />
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { listApi } from "@/api/index";
import { useRouter } from "vue-router";

const router = useRouter()
const onSubmit = () => {
    getList()
}

const list = ref([])
const query = reactive({
  page: '',
  pageSize: '',
  carNumber: '',
  personName: '',
  cardStatus: '',
})
const getList = () => {
  listApi(query).then((res: any) => {
    console.log(res);
    list.value = res.data.rows
    total.value = res.data.total
  })
}
getList()
const total = ref(0)
const add=()=>{
  router.push('/addCard')
}
</script>

<style lang="scss" scoped></style>