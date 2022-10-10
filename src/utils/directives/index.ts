import { hasAuth } from "../auth"

const loadDirectives = (app: any) => {
    // 权限埋点
    app.directive("auth", (el: any, binding: any) => {
        if (!hasAuth(binding.value)) {
            el.parentNode.removeChild(el)
        }
    })

    // 自定义title
    app.directive("title", (el: any, binding: any) => {
        document.title = binding.value
    })
}

export default loadDirectives
