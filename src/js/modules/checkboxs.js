if ( document.querySelector('.checkboxs__item') ){
	var checkboxs = document.querySelectorAll('.checkboxs__item');
	for (var i = 0; i < checkboxs.length; i++) {
		checkboxs[i].addEventListener('click', function(){
			this.classList.toggle('checkboxs__item_active');
		});
	}
}