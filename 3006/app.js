const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
            text: 'Please click button random',
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        output() {
            let randomNumber = Math.random();
            if (randomNumber < 0.5) {
                this.text = 'Learn Vue!';
            } else {
                this.text = 'Learn PHP!';
            }
        },

        outputGoal() {
            let randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue';
            } else {
                return 'Master Vue!'
            }
        }
    },
});

app.mount('#user-goal');
