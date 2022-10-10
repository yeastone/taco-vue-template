<template>
    <div class="yh-scale-content">
        <div
            :ref="contentRef"
            :class="{ 'scale-on': zoom }"
            :style="{
                width: zoom ? width : '100%',
                height: zoom ? scaleHeight + 'px' : '100%',
                transform: zoom ? `scale(${scale}) translate(-50%, -50%)` : '',
            }"
        >
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { debounce, domResizeObserver } from "./utils.js"
import { ref, onMounted } from "vue"

const props = defineProps({
    scaleWidth: {
        type: Number,
        default: 1920,
    },
    scaleHeight: {
        type: Number,
        default: 1080,
    },
    zoom: {
        type: Boolean,
        default: true,
    },
    observerId: {
        type: String,
        default: "app",
    },
})

const contentRef = ref("")
const scale = ref(1)
const width = ref("100%")
const height = ref("100%")
const refH = ref(0)
const refW = ref(0)

const getScale = debounce(500, function () {
    if (props.scaleHeight) {
        scale.value = refH.value / props.scaleHeight
        width.value = refW.value / scale.value + "px"
    }
})

onMounted(() => {
    const el = document.getElementById(props.observerId)
    el &&
        domResizeObserver(el, (entries: any) => {
            for (let entry of entries) {
                refH.value = entry.contentRect.height
                refW.value = entry.contentRect.width
                props.zoom && getScale()
            }
        })
})
</script>
<style lang="less" scoped>
.yh-scale-content {
    position: relative;
    width: 100%;
    height: 100%;
    .scale-on {
        position: absolute;
        transform-origin: 0 0;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
}
</style>
