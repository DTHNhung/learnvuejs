const app = Vue.createApp({
    data() {
        return {
            text: 'Please click button random'
        };
    },
    methods: {
        output() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                this.text = 'Learn Vue!';
            } else {
                this.text = 'Master Vue!';
            }
        }
    },
});

app.mount('#user-goal');
