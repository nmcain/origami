function emuWindow() {
    window.open("emulator.html");
}
function update() {
    window.open("update.html","Updates","width=600, height=400");
}
function settings() {
    window.open("settings.html","Settings","width=600, height=400");
}
function getAngular() {
    window.open("angularwizard.html","Get Angular","width=600, height=400");
}
function calculateStuff() {
    window.open("pages/calculator.html","Calculator","width=317, height=420");
}
function openTerminal() {
    window.open("pages/console.html","Console","width=600, height=420");
}

function noFeature() {
  var txt;
      if (confirm("This feature is not available yet. If you would like to contribute it to the program, visit http://github.com/nmcain/origami")) {
          txt = "user pressed OK";
          console.log('This feature is not available yet. If you would like to contribute it to the program, visit http://github.com/nmcain/origami')
      } else {
          txt = "user pressed cancel";
          console.log('This feature is not available yet. If you would like to contribute it to the program, visit http://github.com/nmcain/origami')
      }
      document.getElementById("demo").innerHTML = txt;
}
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}


function darkace(){
  parent.window.editor.setTheme("ace/theme/merbivore");

}


function setdark() {
      document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-dark.css" />';
darkace()
}
function darkset() {
  parent.window.setdark();
}
function lightset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-default.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}





function blueset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-blue.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}
function indigoset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-indigo.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}
function pinkset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-pink.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}
function orangeset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-orange.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}
function greenset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-green.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}
function redset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-red.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}
function grayset() {
  parent.window.document.getElementById("theme").innerHTML='<link  rel="stylesheet" href="css/themes/theme-gray.css" />';;
  parent.window.editor.setTheme("ace/theme/chrome");
}

//onclick="settings()"
