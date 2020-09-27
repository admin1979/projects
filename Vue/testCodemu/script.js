Vue.component('my-component', {
	props: ['name'],
	template: '<div>Привет, {{ name }}!</div>',
});

let app = new Vue({
	el: '#app',
	data: {
		value: 'Вася',
	}
});

// 20. Работа с компонентами в фреймворке Vue