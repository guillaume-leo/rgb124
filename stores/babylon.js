export const useBabylonStore = defineStore('BabylonStore', {
  state: () => ({
    progress: 0,
    logs: [],
    isLoading: false,
    baseURL:
      'https://raw.githubusercontent.com/guillaume-leo/rgb124/main/assets/',
  }),
  actions: {
    addLog(log) {
      this.logs = [log, ...this.logs];
    },
    setProgress(n) {
      this.progress = n;
    },
    setIsLoading(result) {
      this.isLoading = result;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBabylonStore, import.meta.hot));
}
