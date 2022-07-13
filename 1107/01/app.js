const app = Vue.createApp({
  data() {
    return {
      enterGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterGoalValue);
      this.enterGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
