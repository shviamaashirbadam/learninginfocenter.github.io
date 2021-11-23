
export class ValuePair{
  public key;
  public value;
  constructor(key, value){
    this.key =key;
    this.value = value;
  }
  toString(){
    return '[#${}: ${this.value}'
  }
}


export default class Dictionary<K, V> {
  private table: { [key: string]: ValuePair };

  constructor(private toStrFn: (key: K) => string = defaultToString) {
    this.table = {};
  }

  set(key: K, value: V) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key: K): V {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  hasKey(key: K) {
    return this.table[this.toStrFn(key)] != null;
  }

  remove(key: K) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  values(): V[] {
    return this.keyValues().map(
      (valuePair: ValuePair) => valuePair.value
    );
  }

  keys(): K[] {
    return this.keyValues().map(
      (valuePair: ValuePair) => valuePair.key
    );
  }

  keyValues(): ValuePair[] {
    return Object.values(this.table);
  }

  forEach(callbackFn: (key: K, value: V) => any) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }


}

export function defaultToString(item){
  if(item === null){
    return 'NULL';
  }
  else if(item ===undefined){
    return 'UNDEFINED'
  }
  else if (typeof item ==='string' || item instanceof String){
    return `${item}`
  }

  return item.toString();
}

