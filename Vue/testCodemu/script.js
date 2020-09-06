let app = new Vue({
    el: '#app',
    data: {
        text: 'hello111',
    },
    methods: {
        show: function () {
            alert(this.text);
        }
    }
});

// 4. Методы и события. Навешиваем события