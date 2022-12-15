export const useGoogleSheet = async () => {
  let videos = [];
  const sheetID = '1Cc-wzSSeFl5JXfXD3ytr-hGzz5dOIBo7GhWl6crFG7g';
  const query = 'SELECT *';
  const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?&tq=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(sheetURL);
  const data = await response.text();
  const r = data.match(
    /google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/
  );
  if (r && r.length == 2) {
    const obj = JSON.parse(r[1]);
    const table = obj.table;
    const rows = table.rows.map(({ c }) => c.map(({ v }) => v));
    rows.forEach((row) => {
      let VIDEO_HD_URL = row[0];
      let SLUG = row[1];
      let DATE = row[2];
      let DESCRIPTION = row[3];
      let CATEGORY = row[4];
      let VIDEO_SD_URL = row[5];
      let HOME_TITLE = row[6];
      let START_TIME = row[7];
      let LOOP_RANGE = row[8] || 0;
      videos = [
        ...videos,
        {
          VIDEO_HD_URL,
          SLUG,
          DATE,
          DESCRIPTION,
          CATEGORY,
          VIDEO_SD_URL,
          HOME_TITLE,
          START_TIME,
          LOOP_RANGE,
        },
      ];
    });
  }
  return videos;
};
