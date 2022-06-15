/* 
RESOURCES
javascript implmenetation https://www.youtube.com/watch?v=QuFPIZj55hU&t=347s

NOTES
*/

const hash = (key, size) => {
  let hashKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashKey = key.charCodeAt(i);
  }
  return hashKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert = (key, value) => {
    const idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  };

  remove = (key) => {
    const idx = hash(key, this.size);
    const deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  };

  search = (key) => {
    const idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  };
}

/* TESTCASES */
const hashTable = new HashTable();
hashTable.insert("george", 19920715);
hashTable.insert("bill", 19600720);
hashTable.insert("tera", 19930305);
hashTable.insert("tyler", 19930315);
console.log("log hashTable", hashTable);
