<template>
    <div class="data-v-wrap" id="data-v-wrap">
        <scale-content observerId="data-v-wrap">
            <div class="data-v">
                <!-- 顶部栏 -->
                <top-header class="header"></top-header>
                <!-- 左侧 -->
                <left class="left"></left>
                <!-- 右侧 -->
                <right class="right"></right>
                <!-- 主视图 -->
                <center-main class="main"></center-main>
            </div>
        </scale-content>
    </div>
</template>
<script setup lang="ts">
import topHeader from "./topHeader/index.vue"
import left from "./left/index.vue"
import right from "./right/index.vue"
import centerMain from "./centerMain/index.vue"
import scaleContent from "@/components/scale/scaleContent.vue"
</script>
<style lang="less" scoped>
.data-v-wrap {
    width: 100vw;
    height: 100vh;
    min-width: 1600px;
    .data-v {
        width: 100%;
        height: 100%;
        position: absolute;
        .header {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .left,
        .right {
            position: absolute;
            width: 450px;
            top: 80px;
            bottom: 20px;
        }
        .left {
            left: 20px;
            border: 2px solid red;
        }
        .right {
            right: 20px;
            border: 2px solid blue;
        }
    }
}
</style>
