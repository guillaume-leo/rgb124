// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['stores', 'babylon'],
  },
  modules: [
    [
      '@pinia/nuxt', 
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
      },
      
    ]
  ],
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/main.scss";',
        },
      },
    },
  },
});
