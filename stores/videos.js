export const useVideoStore = defineStore('VideosStore', {
  state: () => ({
    videos: [],
    fetching: true,
  }),
  getters: {},
  actions: {
    async storeVideos() {
      this.videos = await useGoogleSheet();
      this.fetching = false;
      return true;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVideoStore, import.meta.hot));
}
