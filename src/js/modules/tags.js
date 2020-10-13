if ( document.querySelector('.tags') ){
	var tagSelector = '.tags__item';
	var throwTags = document.querySelector('.tags__throw'); 
	var tags = document.querySelectorAll(tagSelector);
	for (var i = 0; i < tags.length; i++) {
		console.log(tags[i]);
		tags[i].addEventListener('click', function(){
			removeTag(this);
		});
	}

	throwTags.addEventListener('click', function(){
		removeAllTags(tagSelector);
	});
}


function removeAllTags(tagSelector) {
	tags = document.querySelectorAll(tagSelector);
	for (var i = 0; i < tags.length; i++) {
		tags[i].remove();
	}
	throwTags.remove();
}


function removeTag(item) {
	console.log(item);
	item.remove();
	if ( !document.querySelector(tagSelector) ){
		throwTags.remove();
	}
}