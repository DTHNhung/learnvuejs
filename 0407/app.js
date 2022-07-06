const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      step: '',
      result: 0
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
    setStep(event) {
      this.step = event.target.value;
    },
    addStep() {
      this.result += this.step*1;
    },
    removeStep() {
      this.result -= this.step;
    },
  },
});

app.mount('#events');
