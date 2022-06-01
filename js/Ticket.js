class Ticket {
  
  constructor(reqdate,reqref,odsnum,odsdate,ownerid) {
    this.reqdate = reqdate;
    this.reqref = reqref;
    this.odsnum = odsnum;
    this.odsdate = odsdate;
    this.ownerid = ownerid;
    //liste oggetti
    this.equip=new Array();
    this.works=new Array();
    this.materials=new Array();
    this.notes=new Array();
    this.tecsign=new Array();
    this.clisign=new Array();
  }
  setReqdate(val){
    this.reqdate = val;
  }
  getReqdate(){
    return this.reqdate;
  }
  setReqref(val){
    this.reqref = val;
  }
  getReqref(){
    return this.reqref;
  }
  setOdsnum(val){
    this.odsnum = val;
  }
  getOdsnum(){
    return this.odsnum;
  }
  setOdsdate(val){
    this.odsdate = val;
  }
  getOdsdate(){
    return this.odsdate;
  }
  setOwnerid(val){
    this.ownerid = val;
  }
  getOwnerid(){
    return this.ownerid;
  }
  setAddress(val){
    this.address = val;
  }
  getAddress(){
    return this.address;
  }
  setRefer(val){
    this.refer = val;
  }
  getRefer(){
    return this.refer;
  }
  setReason(val){
    this.reason = val;
  }
  getReason(){
    return this.reason;
  }
  addequi(equi) {
    this.equip.push(equi);
  }
  addwork(work) {
    this.works.push(work);
  }
  addmaterial(material) {
    this.materials.push(material);
  }
  addnote(note) {
    this.notes.push(note);
  }
  setEnddate(val){
    this.enddate = val;
  }
  getEnddate(){
    return this.enddate;
  }
  addtecsign(tecsign) {
    this.tecsign.push(tecsign);
  }
  addclisign(clisign) {
    this.clisign.push(clisign);
  }  
}