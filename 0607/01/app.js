const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    remove() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      alert('Submitted');
    },
  },
});

app.mount('#events');
