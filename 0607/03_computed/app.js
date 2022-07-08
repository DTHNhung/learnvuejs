const app = Vue.createApp({
  data() {
    return {
      name: '',
      lastName: ''

    };
  },
  // thanh phan phu thuoc thay doi thi se thuc thi
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }

      return this.name + ' ' + this.lastName;
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
