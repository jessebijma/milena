function openSearch(){
	$("input").css("width", "100%")
	$("input").css("opacity", "1")
	$("input").focus();

}

function closeSearch(){
	$("input").css("width", "0%")
	$("input").css("opacity", "0")

}


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}