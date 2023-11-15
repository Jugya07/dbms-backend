const pool = require("../../config/database");

module.exports = {
  post: (data, callBack) => {
    pool.query(
        `Select count(*) as x from FavoriteSongs where UserID = ? AND SongID = ?`,
        [
          data.user,
          data.song,
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          console.log(results[0].x)
          if(results[0].x==0) {
          pool.query(
            `insert into FavoriteSongs( UserID, SongID) 
                      values(?,?)`,
            [
              data.user,
              data.song,
            ],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results);
            }
          );
          }
        }
      );
  },
  get: (id, callBack) => {
    pool.query(
      `SELECT Songs.*
      FROM FavoriteSongs
      JOIN Songs ON FavoriteSongs.SongID = Songs.SongID
      WHERE FavoriteSongs.UserID = ?;
      `,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};