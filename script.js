var editor = $(parent.document.body)
editor.find("#project-files-header").html("david sucks").css({color: "cornsilk"});
//editor.find("div").css({background:"black"})
var topbar = $(parent.parent.document.body).find("#topbar")

topbar.find(".topbar-button").attr("value", "David Sucks")

topbar.find(".project-name").html("David Sucks")

editor.find(".pane-header").html("David Sucks")
topbar.append("David Sucks")

editor.find(".title").html("David Sucks")



//var allDivsInTheEditor = editor.find("div")



// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked