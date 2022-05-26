class Ticket {
  
  constructor(reqdate,reqref,odsnum,odsdate,ownerid) {
    this._reqdate = reqdate;
    this._reqref = reqref;
    this._odsnum = odsnum;
    this._odsdate = odsdate;
    this._ownerid = ownerid;
    //
    this._equip=[];
    this._works=[];
    this._materials=[];
    this._notes=[];
    this._tecsign[];
    this._clisign[];
  }
  set reqdate(val){
    this._reqdate = val;
  }
  get reqdate(){
    return this._reqdate;
  }
  set reqref(val){
    this._reqref = val;
  }
  get reqref(){
    return this._reqref;
  }
  set odsnum(val){
    this._odsnum = val;
  }
  get odsnum(){
    return this._odsnum;
  }
  set odsdate(val){
    this._odsdate = val;
  }
  get odsdate(){
    return this._odsdate;
  }
  set ownerid(val){
    this._ownerid = val;
  }
  get ownerid(){
    return this._ownerid;
  }
  set address(val){
    this._address = val;
  }
  get address(){
    return this._address;
  }
  set refer(val){
    this._refer = val;
  }
  get refer(){
    return this._refer;
  }
  set reason(val){
    this._reason = val;
  }
  get reason(){
    return this._reason;
  }
  addequi(equi) {
    this._equip.push(equi);
  }
  addwork(work) {
    this._works.push(work);
  }
  addmaterial(material) {
    this._materials.push(material);
  }
  addnote(note) {
    this._notes.push(note);
  }
  set enddate(val){
    this._enddate = val;
  }
  get enddate(){
    return this._enddate;
  }
  addtecsign(tecsign) {
    this._tecsign.push(tecsign);
  }
  addclisign(clisign) {
    this._clisign.push(clisign);
  }  
}
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
class Work {
  constructor() {
  }
  set workdate(val){
    this._workdate = val;
  }
  get workdate(){
    return this._workdate;
  }
  set travelhours(val){
    this._travelhours = val;
  }
  get travelhours(){
    return this._travelhours;
  }
  set workhours(val){
    this._workhours = val;
  }
  get workhours(){
    return this._workhours;
  }
  set travelkm(val){
    this._travelkm = val;
  }
  get travelkm(){
    return this._travelkm;
  }
}

class Material {
  constructor() {
  }
  set qty(val){
    this._qty = val;
  }
  get qty(){
    return this._qty;
  }
  set cod(val){
    this._cod = val;
  }
  get cod(){
    return this._cod;
  }
  set desc(val){
    this._desc = val;
  }
  get desc(){
    return this._desc;
  }
}

class Notes {
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
}

class Signature {
  constructor() {
  }
  set name(val){
    this._name = name;
  }
  get name(){
    return this._name;
  }
  set signature(val){
    this._signature = val;
  }
  get signature(){
    return this._signature;
  }
}

var ticket= new Ticket('26-05-2022','alessandro cescon','123456','25-05-2022','001');
var eqi = new Equipment('GEN_SET','999999');
ticket.addequi(eqi);
var wor = new Work();
ticket.addwork(wor);
var mat = new Material();
ticket.addmaterial(mat);
var not = new Note();
ticket.addnote(not);
var tsi = new Signature();
ticket.addtecsign(tsi);
var csi = new Signature();
ticket.addclisign(csi);



console.log(ticket);
//ticket.adsnum = '9999999999';