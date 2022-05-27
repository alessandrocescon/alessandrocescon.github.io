class Note {
  constructor() {
  }
  set date(val){
    this._date = val;
  }
  get date(){
    return this._date;
  }
  set text(val){
    this._text = val;
  }
  get text(){
    return this._text;
  }
  set type(val){
    this._type = val;
  }
  get type(){
    return this._type;
  }
}