var browser;
var area;
var selectedText = "";
var selectionStart,selectionEnd;
var isIE = false;
var txt_hist,pos_hist,ihist,nhist,Nhist;
var ctrlDown=false;
var key={tabKey:9, ctrlKey:17, pageupKey:33, pagedownKey:34, leftKey:37, upKey:38, rightKey:39, downKey:40, delKey:46, aKey:65, cKey:67, sKey:83, vKey:86, xKey:88, yKey:89, zKey:90};

//window.onblur = function()
$(window).blur( function()
{
  selectedText="";
  LocalSave();
});

//window.onunload = function()
//$(window).unload( function()
$(window).on("unload", function(e)
{
  LocalSave();
});
//window.onload = function()
$(document).ready( function()
{
  area = document.getElementById("area");
  txt_hist = new Array();
  pos_hist = new Array();
  Nhist = 10;
  nhist = 0;
  ihist = 0;

  browser = get_browser();

  if (navigator.appName == 'Microsoft Internet Explorer')
    isIE = true;

  if( typeof(localStorage.notepad_text) == 'undefined' )
  {
    if( typeof(localStorage.text) == 'undefined' )
      localStorage.notepad_text = '';
    else
      localStorage.notepad_text = localStorage.text;
  }
  area.value = localStorage.notepad_text;

  if( typeof(localStorage.notepad_fontSize) == 'undefined' )
  {
    if( typeof(localStorage.fontSize) == 'undefined' )
      localStorage.notepad_fontSize = 15;
    else
      localStorage.notepad_fontSize = localStorage.fontSize;
  }

  if( typeof(localStorage.notepad_filename) == 'undefined' )
    localStorage.notepad_filename = '';
  SetDocTitle();

  SetFontSize();

  $("#area").keydown(function(e) {
    //setTimeout(function(){ keydown(e); }, 100);
    keydown(e);
  });
  //$( "#area" ).keyup(function(e) {
  //	keyup(e);
  //});

  Snapshot();

  //area.addEventListener('click', function() {
  $("#area").click(function() {
    pos = getCaret();
    if( pos!=pos_hist[ihist] )
      Snapshot();
    SetBar();
    return false;
  //}, false);
  });

  //$("#menu2 .mdl-button").on("hover", function() {
  $("#menu2 .mdl-button").mouseenter( function() {
    $(this).click();
  });
  //$("#menu2 .mdl-button").mouseleave( function() {
  //	$("#menu2 .mdl-menu__container").removeClass("is-visible");
  //});
  $("#menu2 .mdl-menu").mouseleave( function() {
    $("#menu2 .mdl-menu__container").removeClass("is-visible");
  });
  $("#header").mouseenter( function() {
    $("#menu2 .mdl-menu__container").removeClass("is-visible");
  });
  $("#area").mouseenter( function() {
    $("#menu2 .mdl-menu__container").removeClass("is-visible");
  });

  $("#old_div i").click( function() { $("#old_div").hide(); });
  TextLines();
  setCaret(0);
  SetBar();
  //alert("Please press the Save button to backup your notes. Rapidtables.com will upgrade to secured http in several days.");
});

function keydown(e)
{
  var evtobj = window.event? event : e;
  var ctrlKey=evtobj.ctrlKey;
  var keyCode=evtobj.keyCode;
  if( ctrlKey )
  {
    if( keyCode==key.aKey )
    {
      area.focus();
    }
    if( keyCode==key.sKey )
    {
      e.preventDefault();
      Save();
      return false;
    }
    // Ctrl+Z
    if( keyCode==key.zKey )
    {
      e.preventDefault();
      Undo();
    }
    // Ctrl+Y
    if( keyCode==key.yKey )
    {
      e.preventDefault();
      Redo();
    }
    // Ctrl+C
    if( keyCode==key.cKey )
    {
      //e.preventDefault();
      Copy();
    }
    // Ctrl+V
    if( keyCode==key.vKey )
    {
      if( selectedText.length!=0 )
        e.preventDefault();
      Paste();
    }
    // Ctrl+X
    if( keyCode==key.xKey )
    {
      //e.preventDefault();
      Cut();
    }
  }
  // page up/down
  if( keyCode==key.upKey || keyCode==key.downKey )
  {
    area.focus();
  }
  // tab
  if( keyCode==key.tabKey )
  {
    e.preventDefault();
    Snapshot();
    s = getSelect(area);
    var text = area.value;
    fillString(text, '\u0009', s.start, s.end);
    pos = s.start+1;
    setCaret(pos);
  }
  // delete
  if( keyCode==key.delKey )
  {
    Del2();
  }

  SetBar();
}
/*
function keydown(e)
{
  var keyCode=e.keyCode;
  var ctrlKey=e.ctrlKey;
  var OSName = GetOS();
  if( OSName=="MacOS" )
  {
    if( browser=='Firefox' && keyCode==224 )
      ctrlDown=true;
    else if( browser=='Chrome' && (keyCode==91 || keyCode==93))
      ctrlDown=true;
    else if( browser=='Opera' && keyCode==key.ctrlKey )
      ctrlDown=true;
  }
  else if( keyCode==key.ctrlKey )
  {
    ctrlDown=true;
    console.log("Ctrl down");
  }

  if( ctrlDown )
  {
    if( keyCode==key.aKey )
    {
      area.focus();
    }
    //if( keyCode==key.sKey )
    //{
    //	e.preventDefault();
    //	Save();
    //	return false;
    //}
    // Ctrl+Z
    if( keyCode==key.zKey )
    {
      e.preventDefault();
      Undo();
    }
    // Ctrl+Y
    if( keyCode==key.yKey )
    {
      e.preventDefault();
      Redo();
    }
    // Ctrl+C
    if( keyCode==key.cKey )
    {
      //e.preventDefault();
      Copy();
    }
    // Ctrl+V
    if( keyCode==key.vKey )
    {
      if( selectedText.length!=0 )
        e.preventDefault();
      Paste();
    }
    // Ctrl+X
    if( keyCode==key.xKey )
    {
      //e.preventDefault();
      Cut();
    }
  }
  // page up/down
  if( keyCode==key.upKey || keyCode==key.downKey )
  {
    area.focus();
  }
  // tab
  if( keyCode==key.tabKey )
  {
    e.preventDefault();
    Snapshot();
    s = getSelect(area);
    var text = area.value;
    fillString(text, '\u0009', s.start, s.end);
    pos = s.start+1;
    setCaret(pos);
  }
  // delete
  if( keyCode==key.delKey )
  {
    Del2();
  }

  SetBar();
}
*/
/*
function keyup(e)
{
  var keyCode=e.keyCode;
  var OSName = GetOS();
  if( OSName=="MacOS" )
  {
    if( browser=='Firefox' && keyCode==224 )
      ctrlDown=false;
    else if( browser=='Chrome' && (keyCode==91 || keyCode==93))
      ctrlDown=false;
    else if( browser=='Opera' && keyCode==key.ctrlKey )
      ctrlDown=false;
  }
  else if( keyCode==key.ctrlKey )
  {
    ctrlDown=false;
    console.log("Ctrl up");
  }
}
*/
function Print()
{
      childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes');
      childWindow.document.open();
      childWindow.document.write('<html lang="en"><head></head><body>');
      childWindow.document.write(document.getElementById('area').value.replace(/\n/gi,'<br>'));
      childWindow.document.write('</body></html>');
      childWindow.print();
      childWindow.document.close();
      childWindow.close();
  }
  function Help()
  {
    window.location.href = 'notepad_help.html';
  }
  // works with chrome, not in FF
  function Exit()
  {
    window.open('','_self','');
    window.close();
  }
function New()
{
  cancelSaveFile();
  Snapshot();
  if( area.value != "" )
  {
    var r=confirm("Are you sure?");
    if (r==true)
    {
      area.value = "";
        localStorage.notepad_filename = '';
      SetDocTitle();
      //Snapshot();
    }
  }
  area.focus();
}
function Open()
{
  cancelSaveFile();
  var fileElem = document.getElementById("fileElem");
  fileElem.focus();
  fileElem.click();
}
function LocalSave()
{
  localStorage.notepad_text = area.value;
  area.focus();
}
function Save_As()
{
  if( area.value=='' ) return;
  document.getElementById("name").style.display = "";
  //return false;
}
function Save()
{
  if( area.value=='' ) return;

  if( localStorage.notepad_filename=='' )
    document.getElementById("name").style.display = "";
  else
    saveFile();

  return false;
}
function SelectAll()
{
  area.select();
}
function Del()
{
  s = getSelect(area);
  if( s.text.length!=0 )
  {
    Snapshot();
    var text = area.value;
    fillString(text,"", s.start, s.end);
  }
  pos = s.start;
  setCaret(pos);

  area.focus();
}
function Del2()
{
  s = getSelect(area);
  if( s.text.length!=0 )
  {
    Snapshot();
    var text = area.value;
    fillString(text,"", s.start, s.end-1);
  }
  pos = s.start;
  setCaret(pos);

  area.focus();
}
function Cut()
{
  s = getSelect(area);
  if( s.text.length!=0 )
  {
    Snapshot();
    selectedText = s.text;
    fillString(area.value,"", s.start, s.end);
  }
  else
    selectedText = '';
  pos = s.start;
  setCaret(pos);
  area.focus();
}
function Copy()
{
  //document.execCommand('copy');
  s = getSelect(area);
  if( s.text.length!=0 )
    selectedText = s.text;
  else
    selectedText = '';
  setSelect(area,s.start,s.end);
  area.focus();
}
function Paste()
{
  s = getSelect(area);
  Snapshot();
  if( selectedText.length!=0 )
  {
    //Snapshot();
    var text = area.value;
    fillString(text, selectedText, s.start, s.end);
    pos = s.start+selectedText.length;
    setCaret(pos);
  }
  area.focus();
}
function cancelSaveFile()
{
  document.getElementById('name').style.display = "none";
}
function saveFile()
{
  document.getElementById("name").style.display = "none";
  var name = document.getElementById("filename").value;
  if( name=='' ) name='filename.txt';
  localStorage.notepad_filename = name;
  SetDocTitle();
  LocalSave();

  s = area.value;
  OSName = GetOS();
  if( OSName=="Windows" )
    s = s.replace(/\n/g,'\r\n');
  var blob = new Blob([s], {type: "text/plain;charset=utf-8"});
  saveAs(blob, localStorage.notepad_filename);
}
function loadFile()
{
  var fileElem = document.getElementById("fileElem").files[0];
  var name = fileElem.name;
  var reader = new FileReader();

    reader.onloadend = function(evt) {
      if( evt.target.readyState==FileReader.DONE ) {
        localStorage.notepad_filename = name;
      SetDocTitle();
        //area.value = evt.target.result;
        s = evt.target.result;
      OSName = GetOS();
      if( OSName=="Windows" )
          s = s.replace(/\r\n/g,'\n');
        area.value = s;
      area.focus();

        }
    };
  reader.readAsText(fileElem);
}
function getSelect(obj)
{
  var s = obj.selectionStart;
  var e = obj.selectionEnd;
  var txt = obj.value.substring(s,e);
  return { start: s, end: e, text: txt };
}
function setSelect(obj, start, end)
{
  obj.focus();
  obj.selectionStart = start;
  obj.selectionEnd = end;
}
function fillString(text, selectText, start, end)
{
  // split textarea value into three pieces: before startPosition,
    // startPosition until endPosition, and after endPosition
  var str1 = text.substring(0,start);
  var str2 = text.substring(start,end);
  var str3 = text.substring(end,text.length);
  // replace str2 with formatted substring (selectedText)
  str2 = selectText;
  area.value = str1+str2+str3;
}
// !!! check with IE
function getCaret()
{
  return area.selectionStart;
}
function setCaret(pos)
{
  area.selectionStart = pos;
  area.selectionEnd   = pos;
}
function Snapshot()
{
  pos = getCaret();
  txt = area.value;
  if( txt_hist[ihist-1]==area.value ) return;
  if( ihist==nhist )
  {
    pos_hist.push(pos);
    txt_hist.push(txt);
    ihist++;
    if( pos_hist.length > Nhist )
    {
      pos_hist.shift();
      txt_hist.shift();
      ihist--;
    }
  }
  else
  {
    pos_hist[ihist] = pos;
    txt_hist[ihist] = txt;
    ihist++;
    if( (ihist+1)<=nhist )
      for(i=ihist+1; i<=nhist; i++)
      {
        pos_hist.pop();
        txt_hist.pop();
      }
  }
  nhist = ihist;
}
function Undo()
{
  //if( browser=='Chrome' )
  if(0)
  {
    document.execCommand('undo',false,null);
    return;
  }

  if( nhist==0 ) return;
  if( ihist<2 ) return;

  if( txt_hist[ihist-1]!=area.value )
    Snapshot();
  ihist--;
  i = ihist-1
  pos = pos_hist[i];
  txt = txt_hist[i];
  setCaret(pos);
  area.value = txt;
}
function Redo()
{
  //if( browser=='Chrome' )
  if(0)
  {
    document.execCommand('redo',false,null);
    return;
  }

  if( nhist==0 ) return;
  if( ihist==nhist ) return;
  pos = pos_hist[ihist];
  txt = txt_hist[ihist];
  ihist++;
  setCaret(pos);
  area.value = txt;
}
function DecSize()
{
  if( localStorage.notepad_fontSize > 8 )
  {
    localStorage.notepad_fontSize--;
    if( localStorage.notepad_fontSize >= 13 ) localStorage.notepad_fontSize--;
    SetFontSize();
  }
  area.focus();
}
function IncSize()
{
  if( localStorage.notepad_fontSize < 50 )
  {
    localStorage.notepad_fontSize++;
    if( localStorage.notepad_fontSize >= 13 ) localStorage.notepad_fontSize++;
    SetFontSize();
  }
  area.focus();
}
function TextLines()
{
  var visibility=$("#tlines").css('visibility');
  $("#tlines").css('visibility', (visibility == 'visible') ? 'hidden' : 'visible');
  if( visibility == 'visible' )
    $("#area").removeClass("notes");
  else
    $("#area").addClass("notes");
}
function SetFontSize()
{
  area.style.fontSize = localStorage.notepad_fontSize+'px';
}
function SetDocTitle()
{
  var name = localStorage.notepad_filename;
  if( name=='' )
    document.title = 'Origami Editor';
  else
    document.title = 'Origami Editor - '+localStorage.notepad_filename;
}
function SetBar() {
  //var pos=$("#area").prop("selectionStart");
  var pos=$("#area").prop("selectionEnd");
  var txt=$("#area").val();
  txt = txt.substring(0,pos);
  var line = txt.split('\n').length;
  var col = txt.split('\n')[line-1].length+1;
  $("#bar").html("Line "+line+", Column "+col);
}
