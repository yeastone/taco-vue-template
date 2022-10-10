import { defineStore } from 'pinia'
import { store } from '@/store'
import { getToken, setToken, removeToken } from '@/utils/auth'

const data = getToken()
let token = ''
let name = ''
if (data) {
    const dataJson = JSON.parse(data)
    if (dataJson) {
        token = dataJson?.accessToken
        name = dataJson?.name ?? 'admin'
    }
}

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        token,
        name,
        expired: 0,
    }),
    getters: {
        nameLength: state => state.name.length,
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        setName(name: string) {
            this.name = name
        },
    },
})

export function useUserStoreHook() {
    return useUserStore(store)
}
