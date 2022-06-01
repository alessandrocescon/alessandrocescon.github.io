class Work {
  constructor(workdate,travelhours,workhours,travelkm) {
    this.workdate=workdate;
    this.travelhours=travelhours;
    this.workhours=workhours;
    this.travelkm=travelkm;
  }
  setWorkdate(val){
    this.workdate = val;
  }
  getWorkdate(){
    return this.workdate;
  }
  setTravelhours(val){
    this.travelhours = val;
  }
  getTravelhours(){
    return this.travelhours;
  }
  setWorkhours(val){
    this.workhours = val;
  }
  getWorkhours(){
    return this.workhours;
  }
  setTravelkm(val){
    this.travelkm = val;
  }
  getTravelkm(){
    return this.travelkm;
  }
}