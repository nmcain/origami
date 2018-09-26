var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");
editor.setOptions({
fontFamily: "Source Code Pro",
fontSize: "13px"
});

editor.commands.addCommand({
name: 'saveFile',
bindKey: {
win: 'Ctrl-S',
mac: 'Command-S',
sender: 'editor|cli'
},
exec: function(env, args, request) {
doDL(editor.getSession().getValue());
}
});
