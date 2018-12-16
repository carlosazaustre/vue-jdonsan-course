const app = new Vue({
  el: '#my-app',
  data: {
    text: 'My first message on Vue'
  }
})

// app.$mount('#my-app')
setTimeout(() => {
  app.text = 'Message changed!'
}, 3000)