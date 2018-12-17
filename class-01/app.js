Vue.component('button-counter', {
  template: `<button v-on:click='add'>Counter: {{ counter }}</button>`,

  data () {
    return {
      counter: 0
    }
  },

  methods: {
    add () {
      this.counter++
    }
  }
})

const app = new Vue({
  el: '#my-app'
})