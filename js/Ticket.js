class Ticket {
  
  constructor(reqdate,reqref,odsnum,odsdate,ownerid) {
    this._reqdate = reqdate;
    this._reqref = reqref;
    this._odsnum = odsnum;
    this._odsdate = odsdate;
    this._ownerid = ownerid;
    //liste oggetti
    this._equip=[];
    this._works=[];
    this._materials=[];
    this._notes=[];
    this._tecsign=[];
    this._clisign=[];
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