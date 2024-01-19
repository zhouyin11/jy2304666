<template>
    <el-container style="width: 100vw;height: 100vh;">
        <el-aside width="200px">
            <el-menu active-text-color="#ffd04b" background-color="#fff" class="el-menu-vertical-demo" default-active="2"
                text-color="#000" style="height: 100%;">
                <el-sub-menu :index="item.title" v-for="(item, index) in menu" :key="item.id">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item :index="ite.title" v-for="ite, index in item.children" :key="ite.id" @click="go(ite.title)">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>{{ ite.title }}</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>

            </el-menu>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { menuApi } from "@/api/index";
import { useRouter } from "vue-router";

const router = useRouter()

const menu = ref<any>([])
const Authorization = ref(localStorage.getItem("token"))
menuApi(Authorization).then((res: any) => {
    menu.value = res.data
    // console.log(res)
})

const go=(t: string)=>{
    console.log(t);
    if(t==='月卡管理'){
        router.push('/card')
    }
}
</script>

<style lang="scss" scoped></style>