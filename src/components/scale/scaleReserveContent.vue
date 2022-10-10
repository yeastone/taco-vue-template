<template>
    <div class="yh-scale-reserve-content">
        <div
            :ref="contentRef"
            :style="{
                width: zoom ? width : '100%',
                height: zoom ? height : '100%',
                transform: zoom ? `scale(${scale}) translate(0, 0)` : '',
                WebkitTransform: zoom ? `scale(${scale}) translate(0, 0) ` : '',
            }"
            :class="{ 'scale-reserve-on': zoom }"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { debounce, domResizeObserver } from "./utils"
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

const getScale = debounce(500, () => {
    if (props.scaleHeight) {
        const h = props.scaleHeight
        const s = refH.value / h
        const w = refW.value / s
        width.value = w * s + "px"
        height.value = h * s + "px"
        scale.value = 1 / s
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
.yh-scale-reserve-content {
    .scale-reserve-on {
        position: absolute;
        transform-origin: 0 0;
    }
}
</style>
