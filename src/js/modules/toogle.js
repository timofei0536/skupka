if ( document.querySelector('.switch') ){
	var switchItems = document.querySelectorAll('.switch__item');
	for (var i = 0; i < switchItems.length; i++) {
		switchItems[i].addEventListener('click', function(){
			if ( !this.classList.contains('switch__item_active') ) {  
			document.querySelector('.switch__item_active').classList.remove('switch__item_active');
			this.classList.add('switch__item_active');
			document.querySelector('.switch__toogle').classList.toggle('switch__toogle_right');
			}
		});
	}
}