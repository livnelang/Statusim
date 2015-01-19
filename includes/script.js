$(document).ready(function() {
	$.getJSON("includes/likes.json",function(data) {
	console.log(data);
	//get a reference to the select element
	var $select = $('#topTen');
	var i = 1;
	//iterate over the data and append a select option
  $.each(data.person, function(key, val){
    $select.append('<p> <span class="num">'+i+'.</span> +
    '<span class="name">'+Inbal Bill+'</span> +
    <span class="likes">23</span></p>;
    i++;
  });
  
});
