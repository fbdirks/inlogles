function kop() {
 	/* 
		Dit kop systeem komt uit andere modules en is op dit moment nog niet aangepast aan DEZE module
		ToDo:  adapt
	*/
	
	
 	// bepalen eigen filenaam en volgende en vorige pagina.
 	var url = window.location.pathname;
 	var filename = url.substring(url.lastIndexOf('/')+1);
 	if (filename=="") filename="index.php";
	console.log(filename);
	var nummer = filename.slice(6,8);
	console.log(nummer);
	var volgende = parseInt(nummer) + 1;
	if (volgende>40) volgende=40;
	var vorige = parseInt(nummer) - 1;
	if (vorige<1) vorige = 1;
	var volgendePagina = "pagina" + volgende.toString() +  ".php";
	var vorigePagina = "pagina" + vorige.toString() +  ".php";
	console.log("Filenaam = " + filename);
	
	// uiteraard speciale behandeling als dit de index.php is
	if (filename=="index.php") {
		volgendePagina = "pagina1.php";
		vorigePagina = "index.php";
	} else if (filename=="pagina1.php"){
		vorigePagina = "index.php";
	}
	
	// Als volgende pagina niet bestaat verwijst die pagina naar zichzelf.
	if (!doesFileExist(volgendePagina)) {
		console.log("File bestaat niet!!");
		volgendePagina=filename;
	} 
	
	
  var logo = "php2.gif";
  var kopTekst = "<div><img src=\"" + logo + "\" />"+ " &nbsp;&nbsp;&nbsp;<i>aantekeningen</i>";

  
  
  var knops = "<br><br><hr><span style=\"text-align: right\" title=\"vorige pagina\"><a href=\"" + vorigePagina + "\"><span class=\"knopje\">&lt;</span></a>";
  knops += " <a href=\"index.php\" title=\"Index\"><span class=\"knopje\">*</span></a> ";
  knops += "<a href=\""+ volgendePagina + "\" title=\"volgende pagina\"><span class=\"knopje\">&gt;</span></a><hr></span>";
  kopTekst += knops;

	kopTekst="Aantekeningen Inlogsysteem versie 0.1";
	console.log(kopTekst);
	$("koppie").html(kopTekst);
  document.getElementById("koppie").innerHTML=kopTekst;
  console.log(kopTekst);
  console.log("Deze regel wordt netjes uitgevoerd!!");
  
	var knops="";
  // voettekst aanmaken
  var d = new Date();
  var voetTekst = knops + "<br><h6> &copy;" + d.getFullYear() + " dsf - <a href=\"index.html\">home<\a></h6>";
  $("footer").html(voetTekst);
  
}


function doesFileExist(urlToFile)
{
   return true;
  
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, true);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
    
}
function fileExists(url) {
    if(url){
        var req = new XMLHttpRequest();
        req.open('HEAD', url, false);
        req.send();
        return req.status==200;
    } else {
        return false;
    }
}
