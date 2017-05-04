var playList = [
 {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
 },
 {
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
 },
 {
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
 },
 {
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
 },
 {
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
 },
 {
 author: "AC/DC",
 song:"BACK IN BLACK"
 },
 {
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
 },
 {
 author: "METALLICA",
 song:"ENTER SANDMAN"
 }
];

window.onload = function () {
	writeList(playList);
}

function writeList(playListSongs) {

	var ol = document.getElementById("songsList");
	ol.style.color = "white";
	ol.style.backgroundColor = "grey";
	for(i=0; i<playListSongs.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = playListSongs[i].author + " - "+ playListSongs[i].song;
		ol.appendChild(li);
	}
}
