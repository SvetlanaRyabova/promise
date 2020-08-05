import read from './reader.js';
import jsonFunction from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((data) => jsonFunction(data))
        .then((str) => {
          resolve(JSON.parse(str));
        });
    });
  }
}
