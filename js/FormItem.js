class FormItem {
  constructor(obj) {
     this.position = obj[0];
     this.classname = obj[1];
     this.fieldname = obj[2];
     this.value = obj[3];
     this.rendered='-';
     this.tpl_textfield='<div class="{%class%}"><label for="{%id%}">{%label%}</label><input type="text" id="{%id%}" name="{%id%}" placeholder="{%placeholder%}" value="{%value%}" /><span class="pure-form-message">{%message%}</span></div>';
     this.tpl_textarea='textarea';
     this.tpl_datefield='<div class="{%class%}"><label for="{%id%}">{%label%}</label><input type="date" id="{%id%}" name="{%id%}" placeholder="{%placeholder%}" value="{%value%}" /><span class="pure-form-message">{%message%}</span></div>';
     this.tpl_fileupload='fileupload';
     this.tpl_integerfield='integerfield';
     this.tpl_floatfield='floatfield';
     this.tpl_map=[];
     this.tpl_map.push(['ticket','reqdate','Data richiesta','Data richiesta','Inserire data richiesta',16,'pure-u-1 pure-u-sm-1-2',this.tpl_datefield]);
     this.tpl_map.push(['ticket','reqref','Richiedente','Dati richiedente','Inserire dati richiedente',64,'pure-u-1 pure-u-sm-1-2',this.tpl_textfield]);
     this.tpl_map.push(['equip','model','Modello','Dati modello','Inserire dati modello',64,'pure-u-1 pure-u-sm-1-2',this.tpl_textfield]);
  }
  setPosition(val){
    this.position = val;
  }
  getPosition(){
    return this.position;
  }
  setClassname(val){
    this.classname = val;
  }
  getClassname(){
    return this.classname;
  }
  setFieldname(val){
    this.fieldname = val;
  }
  getFieldname(){
    return this.fieldname;
  }
  setValue(val){
    this.value = val;
  }
  getValue(){
    return this.value;
  }
  setRespwidth(val){
    this.respwidth = val;
  }
  getRespwidth(){
    return this.respwidth;
  }
  setRendered(val){
    this.rendered = val;
  }
  getRendered(){
    var fdet= this.getFieldData(this.classname,this.fieldname,this.position);
    var finfld='';
    if(fdet && fdet.length == 8) {
       finfld=fdet[7].replaceAll('{%id%}',this.classname+"_"+this.position+"_"+this.fieldname);
       finfld=finfld.replaceAll('{%label%}',fdet[2]);
       finfld=finfld.replaceAll('{%placeholder%}',fdet[3]);
       finfld=finfld.replaceAll('{%value%}',this.value);
       finfld=finfld.replaceAll('{%message%}',fdet[4]);
       finfld=finfld.replaceAll('{%class%}',fdet[6]);
    }
    this.rendered=finfld;
    return this.rendered;
  }
  getFieldData(cname,fname,fpos){
     for(var i=0;i<this.tpl_map.length;i++) {
        if(cname == this.tpl_map[i][0] && fname == this.tpl_map[i][1]) {
           return this.tpl_map[i];
        }

     }
  }
}