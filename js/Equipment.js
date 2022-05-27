class Equipment {
  constructor(model,serial) {
    this._model = model;
    this._serial = serial;
  }
  set model(val){
    this._model = val;
  }
  get model(){
    return this._model;
  }
  set serial(val){
    this._serial = val;
  }
  get serial(){
    return this._serial;
  }
  set power(val){
    this._power = val;
  }
  get power(){
    return this._power;
  }
  set hours(val){
    this._hours = val;
  }
  get hours(){
    return this._hours;
  }
  set hoursdate(val){
    this._hoursdate = val;
  }
  get hoursdate(){
    return this._hoursdate;
  }
  set hoursmaint(val){
    this._hoursmaint = val;
  }
  get hoursmaint(){
    return this._hoursmaint;
  }
  set hoursmaintdate(val){
    this._hoursmaintdate = val;
  }
  get hoursmaintdate(){
    return this._hoursmaintdate;
  } 
}