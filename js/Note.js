class Note {
  constructor(date, text, type) {
     this.date=date;
     this.text=text;
     this.type=type;
  }
  setDate(val){
    this.date = val;
  }
  getDate(){
    return this.date;
  }
  setText(val){
    this.text = val;
  }
  getText(){
    return this.text;
  }
  setType(val){
    this.type = val;
  }
  getType(){
    return this.type;
  }
}