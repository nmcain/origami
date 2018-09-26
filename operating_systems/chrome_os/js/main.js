function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
























function adminDisabled() {
     document.getElementById("launchbar").innerHTML="<style>.gicon{ background:url('img/icons/gicon_red.svg'); background-size:20px; height:20px; width:20px; float:left; margin-top:15px; margin-left:15px; }</style>The device owner has disabled the search tool";
}
function bigAdminDisabled() {
     document.getElementById("launchbar2").innerHTML="<style>.gicon2{ background:url('img/icons/gicon_red.svg'); background-size:20px; height:20px; width:20px; float:left; margin-top:15px; margin-left:15px; }</style>The device owner has disabled the search tool";
}
function hideBigMenu() {
   document.getElementById("bigmenu").style.display="none";
}
function appError() {
    alert("menu Error");
}


function maximizemydiv() {
    document.getElementById("mydiv").style.top="0px";
    document.getElementById("mydiv").style.left="0px";
    document.getElementById("mydiv").style.width="100%";
        document.getElementById("mydiv").style.height="calc(100% - 85px)";
     document.getElementById("datnav").style.background="#000000";
    
    document.getElementById("mydivheader").innerHTML='<div onclick="closeChrome()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="smallify()" class="hovercircle"> <i class="material-icons window md-18">flip_to_front</i> </div> <div onclick="closeChrome()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
    
   
}
function smallify() {
    document.getElementById("mydiv").style.top="100px";
    document.getElementById("mydiv").style.left="175px";
    document.getElementById("mydiv").style.width="1000px";
        document.getElementById("mydiv").style.height="600px";
     document.getElementById("datnav").style.background="transparent";
    
    document.getElementById("mydivheader").innerHTML='<div onclick="closeChrome()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="maximizemydiv()" class="hovercircle"> <i class="material-icons window md-18">crop_square</i> </div> <div onclick="closeChrome()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
}




function maximizemydiv2() {
    document.getElementById("mydiv2").style.top="0px";
    document.getElementById("mydiv2").style.left="0px";
    document.getElementById("mydiv2").style.width="100%";
        document.getElementById("mydiv2").style.height="calc(100% - 50px)";
     document.getElementById("datnav").style.background="#000000";
    
    document.getElementById("mydiv2header").innerHTML='<div onclick="closeChrome2()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="smallify2()" class="hovercircle"> <i class="material-icons window md-18">flip_to_front</i> </div> <div onclick="closeChrome2()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
    
   
}
function smallify2() {
    document.getElementById("mydiv2").style.top="100px";
    document.getElementById("mydiv2").style.left="175px";
    document.getElementById("mydiv2").style.width="1000px";
        document.getElementById("mydiv2").style.height="600px";
     document.getElementById("datnav").style.background="transparent";
    
    document.getElementById("mydiv2header").innerHTML='<div onclick="closeChrome2()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="maximizemydiv2()" class="hovercircle"> <i class="material-icons window md-18">crop_square</i> </div> <div onclick="closeChrome2()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
}




function maximizeorigami() {
    document.getElementById("origami").style.top="0px";
    document.getElementById("origami").style.left="0px";
    document.getElementById("origami").style.width="100%";
        document.getElementById("origami").style.height="calc(100% - 50px)";
     document.getElementById("datnav").style.background="#000000";
    
    document.getElementById("origamiheader").innerHTML='<div onclick="origami()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="smallifyorigami()" class="hovercircle"> <i class="material-icons window md-18">flip_to_front</i> </div> <div onclick="origami()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
    
   
}
function smallifyorigami() {
    document.getElementById("origami").style.top="100px";
    document.getElementById("origami").style.left="175px";
    document.getElementById("origami").style.width="1125px";
        document.getElementById("origami").style.height="600px";
     document.getElementById("datnav").style.background="transparent";
    
    document.getElementById("origamiheader").innerHTML='<div onclick="origami()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="maximizeorigami()" class="hovercircle"> <i class="material-icons window md-18">crop_square</i> </div> <div onclick="origami()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
}







function maximizepreview() {
    document.getElementById("preview").style.top="0px";
    document.getElementById("preview").style.left="0px";
    document.getElementById("preview").style.width="100%";
        document.getElementById("preview").style.height="calc(100% - 50px)";
     document.getElementById("datnav").style.background="#000000";
    
    document.getElementById("previewheader").innerHTML='<div onclick="preview()" class="hovercircle">    <i class="material-icons window md-18">close</i>        </div>       <div onclick="smallifypreview()" class="hovercircle">       <i class="material-icons window md-18">crop_square</i>           </div>           <div onclick="preview()" class="hovercircle">       <i class="material-icons windowmin md-18">remove</i>       </div>';
    
   
}
function smallifypreview() {
    document.getElementById("preview").style.top="100px";
    document.getElementById("preview").style.left="175px";
    document.getElementById("preview").style.width="1000px";
        document.getElementById("preview").style.height="600px";
     document.getElementById("datnav").style.background="transparent";
    
    document.getElementById("previewheader").innerHTML='<div onclick="preview()" class="hovercircle">    <i class="material-icons window md-18">close</i>        </div>       <div onclick="maximizepreview()" class="hovercircle">       <i class="material-icons window md-18">crop_square</i>           </div>           <div onclick="preview()" class="hovercircle">       <i class="material-icons windowmin md-18">remove</i>       </div>';
}










function maximizesettings() {
    document.getElementById("settings").style.top="0px";
    document.getElementById("settings").style.left="0px";
    document.getElementById("settings").style.width="100%";
    document.getElementById("settingsheader").style.width="100%";
        document.getElementById("settings").style.height="calc(100% - 50px)";
     document.getElementById("datnav").style.background="#000000";
    
    document.getElementById("origamiheader").innerHTML='<div onclick="settings()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="smallifysettings()" class="hovercircle"> <i class="material-icons window md-18">flip_to_front</i> </div> <div onclick="settings()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
    
   
}
function smallifysettings() {
    document.getElementById("settings").style.top="100px";
    document.getElementById("settings").style.left="175px";
    document.getElementById("settings").style.width="1125px";
    document.getElementById("settingsheader").style.width="600px";
        document.getElementById("settings").style.height="600px";
     document.getElementById("datnav").style.background="transparent";
    
    document.getElementById("origamiheader").innerHTML='<div onclick="settings()" class="hovercircle"> <i class="material-icons window md-18">close</i> </div> <div onclick="maximizesettings()" class="hovercircle"> <i class="material-icons window md-18">crop_square</i> </div> <div onclick="settings()" class="hovercircle"> <i class="material-icons windowmin md-18">remove</i>';
}











function closemydiv() {
    document.getElementById("mydiv").style.display="none";
}
function closemydiv() {
    document.getElementById("mydiv").style.display="none";
}