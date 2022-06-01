class Equipment {
  constructor(model,serial) {
    this.model = model;
    this.serial = serial;
  }
  setModel(val){
    this.model = val;
  }
  getModel(){
    return this.model;
  }
  setSerial(val){
    this.serial = val;
  }
  getSerial(){
    return this.serial;
  }
  setPower(val){
    this.power = val;
  }
  getPower(){
    return this.power;
  }
  setHours(val){
    this.hours = val;
  }
  getHours(){
    return this.hours;
  }
  setHoursdate(val){
    this.hoursdate = val;
  }
  getHoursdate(){
    return this.hoursdate;
  }
  setHoursmaint(val){
    this.hoursmaint = val;
  }
  getHoursmaint(){
    return this.hoursmaint;
  }
  setHoursmaintdate(val){
    this.hoursmaintdate = val;
  }
  getHoursmaintdate(){
    return this.hoursmaintdate;
  } 
}