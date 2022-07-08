const app = Vue.createApp({
  data() {
    return {
      name: '',
      fullname: '',
      lastName: ''

    };
  },
  // theo doi su thay doi cua cac bien nhu nam, counter
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    }
  },
  methods: {
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
