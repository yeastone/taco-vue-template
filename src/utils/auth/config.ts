declare interface authConfigTypes {
    [key: string]: any[]
}
const config: authConfigTypes = {
    dashboard: ['dashboard-dashboard-dashboard'],
}

export const authConfig = (key: string) => {
    return config[key]
}
