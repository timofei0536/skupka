if ( document.querySelector('#brands .brands-list__link') ){
	var branditems = document.querySelectorAll('#brands .brands-list__link');
	for (var i = 0; i < branditems.length; i++) {
		branditems[i].addEventListener('click', function(){
			this.classList.toggle('brands-list__link_active');
		});
	}
}