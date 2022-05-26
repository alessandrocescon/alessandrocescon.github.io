class Ticket {
  
  constructor(reqdate,reqref,odsnum,odsdate,ownerid) {
    this.reqdate = reqdate;
    this.reqref = reqref;
    this.odsnum = odsnum;
    this.odsdate = odsdate;
    this.ownerid = ownerid;
    //
    this.equip=[];
  }
  set reqdate(val){
    this.reqdate = val;
  }
  get reqdate(){
    return this.reqdate;
  }
  set reqref(val){
    this.reqref = val;
  }
  get reqref(){
    return this.reqref;
  }
  set odsnum(val){
    this.odsnum = val;
  }
  get odsnum(){
    return this.odsnum;
  }
  set odsdate(val){
    this.odsdate = val;
  }
  get odsdate(){
    return this.odsdate;
  }
  set ownerid(val){
    this.ownerid = val;
  }
  get ownerid(){
    return this.ownerid;
  }
  set address(val){
    this.address = val;
  }
  get address(){
    return this.address;
  }
  set refer(val){
    this.refer = val;
  }
  get refer(){
    return this.refer;
  }
  set reason(val){
    this.reason = val;
  }
  get reason(){
    return this.reason;
  }
  addequi(equi) {
    this.equip.push(equi);
  }

}
class Equipment {
  
  constructor(model,serial) {
    this.model = model;
    this.serial = serial;
  }
  set power(val){
    this.power = val;
  }
  get power(){
    return this.power;
  }
  set hours(val){
    this.hours = val;
  }
  get hours(){
    return this.hours;
  }
  set hoursdate(val){
    this.hoursdate = val;
  }
  get hoursdate(){
    return this.hoursdate;
  }
  set hoursmaint(val){
    this.hoursmaint = val;
  }
  get hoursmaint(){
    return this.hoursmaint;
  }
  set hoursmaintdate(val){
    this.hoursmaintdate = val;
  }
  get hoursmaintdate(){
    return this.hoursmaintdate;
  } 

}

var ticket= new Ticket('26-05-2022','alessandro cescon','123456','25-05-2022','001');
var eqi = new Equipment('GEN_SET','999999');
ticket.addequi(eqi);
console.log(ticket);
//ticket.adsnum = '9999999999';