$(document).ready(function() {

/**
 *Function to dynamically fetch topTen Section
 * @param {Object} id_clicked
 */	
function twit_like(id_clicked) {
$.getJSON("includes/likes.json", function(data) {
console.log("Whole JSON Object:");
console.log(data);
//get a reference to the select element
var likes = data[id_clicked];
// first, lets clear the elemnt nodes
$('#topTen').empty();
//now, iterate over the data and append a select option
for(var i = 1; i<=likes.length; i++){
$('#topTen').append('<p> <span class="num">'+i+'.</span>'
+'<span class="name">'+likes[i-1].name+'</span>'
+'<span class="likes">'+likes[i-1].num+'</span></p><hr>');
			}
		});
	}
	
	// activate twit_like as default for likes
	twit_like("likes");
	
	/**
	 * twits OnClick Function
	 */
	$("#tswits").click(function() {
       var button1 = $("#tswits");
       button1.css("background-image","url(images/tswits_button_orange.png)");
       button1.css("color","#ffffff");
       var button2 = $("#like");
       button2.css("background-image","url(images/like_button.png)");
       button2.css("color","#000000");
       twit_like("twits");
   });
   /**
    * like OnClick Function
    */
   $("#like").click(function() {
       var button1 = $("#tswits");
       button1.css("background-image","url(images/tswits_button.png)");
       button1.css("color","#000000");
       var button2 = $("#like");
       button2.css("background-image","url(images/like_button_orange.png)");
       button2.css("color","#ffffff");
       twit_like("likes");
   });
	
	//twit_like("twits");
});


   
