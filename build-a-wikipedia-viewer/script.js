$(document).ready(function(){

var data = {results:[{title:"Title 1",url:"example.com"},{title:"Title 2",url:"example.com"}]}

var theTemplateScript = $("#resultList").html();
var theTemplate = Handlebars.compile (theTemplateScript);
$(document.body).append (theTemplate (data));
});
