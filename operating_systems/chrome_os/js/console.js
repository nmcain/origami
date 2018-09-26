/*
    Filesystem class
*/

class fileSystem {
  constructor(user) {
    this.user = user;
    this.tree = {
      user: {}
    };
    this.treeIndex = 0;
  }

  mkdir(input) {
   this.tree.user[input] = {};
  }

  tree() {
    return this.tree;
  }
};

let profile = new fileSystem('user');

/*
    General functions
*/

var pointer = 'crosh>';

function lineTemplate(pointer, value, disabled="") {
  if (disabled != "" || disabled != "disabled") {
    console.log("lineTemplate() => disabled must be either a blank string or 'disabled'");
  }
  let line =`<div class="new-line"><p class="new-pointer">${pointer}</p><input class="new-input" value="${value}" ${disabled}></div>`
  return line;
}

function previousLine(input) {
  let line = lineTemplate(pointer, input, disabled);
  return line;
}

function newLine(input) {
  let line = lineTemplate(pointer, input);
  $(line).insertBefore('.base-line');
  $('.base-input').val("");
}

function betweenLine(input) {
  let line = lineTemplate(" ", input, "disabled");
  $(line).insertBefore('.base-input');
}

/*
    File functions
*/

function makeDirectory(input) {
  profile.mkdir(input);
  newLine(input);
};
function echo(input) {
  newLine(input);
};
function tree(input) {
  newLine(profile.tree());
}

/*
    Appearance functions
*/

var color = '';
var fontSize = '';
var fontFamily = '';

function editPointer(input) {
  pointer = input.slice(14);
  newLine(input);
}

function editFontFamily(input) {
  fontFamily = input.slice(11);
  newLine(input);
}

function updateFontFamily() {
  $('.base-input').css("font-family", fontFamily);
  $('.new-input').css("font-family", fontFamily);
  $('.base-pointer').css("font-family", fontFamily);
  $('.new-pointer').css("font-family", fontFamily);
  $('.title').css("font-family", fontFamily);
}

function editFontSize(input) {
  let yes = input.slice(9);
  if (typeof(parseInt(yes)) == "number") {
    fontSize = parseInt(yes);
  } else {
    error(input);
    return;
  }
  newLine(input);
}

function updateFontSize() {
  $('.base-input').css("font-size", fontSize);
  $('.new-input').css("font-size", fontSize);
  $('.base-pointer').css("font-size", fontSize);
  $('.new-pointer').css("font-size", fontSize);
  $('.title').css("font-size", fontSize);
}

function editFontColor(input) {
  color = input.slice(10);
  newLine(input);
}

function updateFontColor() {
  $('.base-input').css("color", color);
  $('.new-input').css("color", color);
  $('.base-pointer').css("color", color);
  $('.new-pointer').css("color", color);
  $('.title').css("color", color);
}

function editBackgroundColor(input) {
  let color = input.slice(16);
  $('body').css("background-color", color);
  newLine(input);
}

function error(input) {
  let line =`<div class="new-line"><p class="new-pointer">${pointer}</p><input class="new-input" value="${input}" disabled></div>`;
  let errorLine =`<div class="new-line"><p class="error-pointer"> </p><input class="new-input" value="'${input}' is not a valid command." disabled></div>`;
  $(line).insertBefore('.base-line');
  $(errorLine).insertBefore('.base-line');
  $('.base-input').val("");
}
function help(input) {

}

function clear() {
  $('.new-line').remove();
  $('.base-input').val("");
}

/*
    Interpretation
*/

function interpret() {
  let input = $('.base-input').val();
  input.slice(10);
  if (input === '') {
    newLine(input);
  } else if (input.slice(0,15) == "backgroundcolor") {
    editBackgroundColor(input);
  } else if (input === 'clear') {
    clear();
  } else if (input.slice(0,9) == "fontcolor") {
    editFontColor(input);
  } else if (input == '') {
    newLine(input);
  } else if (input.slice(0,8) == "fontsize") {
    editFontSize(input);
  } else if (input.slice(0,10) == 'fontfamily') {
    editFontFamily(input);
  } else if (input.slice(0,13) == 'changepointer') {
    editPointer(input);
  } else if (input.slice(0,5) == 'mkdir') {
    makeDirectory(input)
  } else if (input.slice(0,4) == 'tree') {
    tree(input);
  }
  else if (input.slice(0,19) == 'settings') {
    settings()
  }
  else if (input.slice(0,19) == 'emulator') {
    emuWindow()
  }
  else if (input.slice(0,19) == 'update') {
    update()
  }
  else if (input.slice(0,19) == 'getangular') {
    getAngular()
  }
  else if (input.slice(0,19) == 'console') {
    openTerminal()
  }
  else if (input.slice(0,19) == 'calculator') {
    calculateStuff()
  }
  else if (input.slice(0,19) == 'neweditor') {
    openNewEditor()
    newLine(input);
  }
  else if (input.slice(0,19) == 'notepad') {
    openNotepad()
    newLine(input);
  }
  else if (input.slice(0,20) == 'alert') {
    alert(input);
    newLine(input);
  }
  else if (input.slice(0,20) == 'help') {
    help(input)
  }
  else if (input.slice(0,21) == 'echo') {
    echo(input);
    newLine(input);
  }


  else {
    error(input);
  }

  updateFontColor();
  updateFontSize();
  updateFontFamily();
}

$(document).keypress(function(e) {
  if (e.which == 13) {
    interpret();
  }
});
