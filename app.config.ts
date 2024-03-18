export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer(cc ide gas)'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
