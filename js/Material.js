class Material {
  constructor(qty, cod, desc) {
     this.qty=qty;
     this.cod=cod;
     this.desc=desc;
  }
  setQty(val){
    this.qty = val;
  }
  getQty(){
    return this.qty;
  }
  setCod(val){
    this.cod = val;
  }
  getCod(){
    return this.cod;
  }
  setDesc(val){
    this.desc = val;
  }
  getDesc(){
    return this.desc;
  }
}