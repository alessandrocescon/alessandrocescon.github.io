class Ticket {
  
  constructor(adsnum) {
    this.adsnum = adsnum;
  }
  set adsnum(val){
    this.adsnum = val;
  }
  get adsnum(){
    return this.adsnum;
  }

}
//var ticket= new Ticket();
//ticket.adsnum = '9999999999';