document.write("Divsible number show");
document.write("<br>");
document.write("<br>");

let b=[11,12,21,22,23,33,34,40,44];
for (i=0; i<b.length; i++) {
	if (b[i]%11==0) {
		document.write(b[i]);
		document.write("<br>");
	}
}