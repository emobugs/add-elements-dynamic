import '../scss/app.scss';

window.addEventListener('DOMContentLoaded', () => {
	// This block will be executed once the page is loaded and ready

	document.body.addEventListener('click', () => {
		for (let i = 0; i < 5; i++) {
			console.log('setaa');
			const article = document.createElement('article');
			article.classList.add('message');
			article.textContent = `This is article ${i} text content`;
			document.body.appendChild(article);
		}
	});
});
