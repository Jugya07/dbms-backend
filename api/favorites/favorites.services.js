const pool = require("../../config/database");

module.exports = {
  post: (data, callBack) => {
    console.log("okay")
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