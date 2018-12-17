// Global Component register
Vue.component('hello-world', {
  template: `
    <h1>Hello, world! My name is {{ name }}</h1>
  `,
  data () {
    return {
      name: 'Carlos'
    }
  }
})

const app = new Vue({
  el: '#my-app',
  // components: { HelloWorld } -- // Locally Component register
  data: {
    text: 'My first message on Vue'
  }
})

// app.$mount('#my-app')
setTimeout(() => {
  app.text = 'Message changed!'
}, 3000)