class Signature {
  constructor(name,signature) {
    this.name = name;
    this.signature = signature;
  }
  setName(val){
    this.name = val;
  }
  getName(){
    return this.name;
  }
  setSignature(val){
    this.signature = val;
  }
  getSignature(){
    return this.signature;
  }
}