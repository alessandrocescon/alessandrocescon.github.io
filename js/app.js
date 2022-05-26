window.addEventListener('load', function() {
    alert("Ready!");
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
}, false);