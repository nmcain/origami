function setOrient() {
 var selectBox = document.getElementById("selectBox");
 var selectedValue = selectBox.options[selectBox.selectedIndex].value;
 if (selectedValue = 1) {
     parent.window.editor.setTheme("ace/theme/dracula");
 }


 //setModel() #selectBoxModel
}
function setFrame() {
 var selectBox = document.getElementById("selectBoxFrame");
 var selectedValue = selectBox.options[selectBox.selectedIndex].value;
 if (selectedValue = 1) {
      parent.window.document.getElementById("phone").innerHTML='<div class="phone"><iframe id="frame" class="phrame" src="open.html"></iframe></div>';;
 }
 if (selectedValue = 2) {
    parent.window.document.getElementById("phone").innerHTML='<iframe id="frame" class="phrame" src="open.html"></iframe>';;
 }
}
//setUi() #selectBoxUi

//setStyle() #selectBoxStyle
function setRender() {
 var selectBox = document.getElementById("selectBoxRender");
 var selectedValue = selectBox.options[selectBox.selectedIndex].value;
 if (selectedValue = 1) {
     parent.window.editor.setTheme("ace/theme/dracula");
 }
 if (selectedValue = 2) {
     parent.window.editor.setTheme("ace/theme/dracula");
 }
}
