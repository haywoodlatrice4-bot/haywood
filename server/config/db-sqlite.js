const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../../threespacshine.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

const query = (sql, params = []) => {
  try {
    const stmt = db.prepare(sql);
    if (sql.trim().toUpperCase().startsWith('SELECT')) {
      return { rows: stmt.all(params) };
    } else {
      const info = stmt.run(params);
      return { rows: [], rowCount: info.changes, insertId: info.lastInsertRowid };
    }
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
};

module.exports = {
  query,
  db
};
