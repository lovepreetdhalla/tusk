var apicall= 'https://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?';
	 $.getJSON(apicall, function(flickrResponse){
	 flickrResponse.items.forEach(function(photo){
		 
	//========================================================
	//Create a new jquery element to hold the images
	//========================================================	 
	 var $img = $("<img>");
	 //============================================================
	 //Set the attribute to url
	 //Contained in the response
	 //============================================================
	 $img.attr("src",photo.media.m);
	 //============================================================
	 //Attach the img tag to the main photo element
	 //============================================================
	 $(".photos").append($img);
	 //console.log(photo.media.m);
});
});
