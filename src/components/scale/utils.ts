export function debounce(delay: number, callback: Function) {
    let lastTime: any

    return function (this: any, ...args: []) {
        clearTimeout(lastTime)
        const that = this

        lastTime = setTimeout(() => {
            callback.apply(that, args)
        }, delay)
    }
}

export const domResizeObserver = (el: Element, cb: ResizeObserverCallback) => {
    const observer = new ResizeObserver(cb)
    observer.observe(el)
    return observer
}
