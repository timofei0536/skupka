if ( document.querySelector('.currencyes') ){
	var currencyItems = document.querySelectorAll('.currencyes__item');
	for (var i = 0; i < currencyItems.length; i++) {
		currencyItems[i].addEventListener('click', function(){
			document.querySelector('.currencyes__item_active').classList.remove('currencyes__item_active');
			this.classList.add('currencyes__item_active');
			document.querySelectorAll('.price__item-currency')[0].innerHTML = this.getAttribute('data-currency');
			document.querySelectorAll('.price__item-currency')[1].innerHTML = this.getAttribute('data-currency');
		});
	}
}