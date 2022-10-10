<template>
    <h2 v-auth="'123'">Login page</h2>
    <p>用户名：{{ mainStore.name }}</p>
    <p>用户名长度：{{ mainStore.nameLength }}</p>
    <el-button @click="updateName">更改名字</el-button>
</template>
<script setup lang="ts">
import { useMainStore } from "@/store/main"

const mainStore = useMainStore()
// console.log(mainStore)
const updateName = () => {
    console.log(123)
    // mainStore.$patch({
    //     name:'hkhsdlkajlsdjlk '
    // })
    mainStore.updateName("一个新的用户名")
}
</script>
