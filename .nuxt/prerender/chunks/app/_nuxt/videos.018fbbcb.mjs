import { d as defineStore } from '../server.mjs';

const useVideoStore = defineStore("VideosStore", {
  state: () => ({
    sheetID: "1Cc-wzSSeFl5JXfXD3ytr-hGzz5dOIBo7GhWl6crFG7g",
    query: "SELECT *",
    videos: []
  }),
  getters: {
    homeVideos(state) {
      return state.videos.map((video) => {
        if (video.VIDEO_HOME_ID)
          return { id: video.VIDEO_HOME_ID, linkText: video.HOME_TITLE };
      });
    }
  },
  actions: {
    callVideos() {
      const sheetURL = `https://docs.google.com/spreadsheets/d/${this.sheetID}/gviz/tq?&tq=${encodeURIComponent(this.query)}`;
      fetch(sheetURL).then((response) => response.text()).then((data) => {
        const r = data.match(
          /google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/
        );
        if (r && r.length == 2) {
          const obj = JSON.parse(r[1]);
          const table = obj.table;
          const rows = table.rows.map(({ c }) => c.map(({ v }) => v));
          rows.forEach((row) => {
            let VIDEO_ID = row[0];
            let TITLE = row[1];
            let DATE = row[2];
            let DESCRIPTION = row[3];
            let LAYOUT_TYPE = row[4];
            let VIDEO_HOME_ID = row[5];
            let HOME_TITLE = row[6];
            let ORDER = row[7];
            this.videos = [
              ...this.videos,
              {
                VIDEO_ID,
                TITLE,
                DATE,
                DESCRIPTION,
                LAYOUT_TYPE,
                VIDEO_HOME_ID,
                HOME_TITLE,
                ORDER
              }
            ];
          });
        }
      });
    }
  }
});

export { useVideoStore as u };
//# sourceMappingURL=videos.018fbbcb.mjs.map
