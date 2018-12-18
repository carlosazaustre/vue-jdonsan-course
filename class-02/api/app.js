'use strict'

const app = new Vue({
  el: '#app',
  data: {
    posts: [],
    errors: []
  },

  created: function () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.posts = response.data)
      .catch(error => this.errors.push(error))
  },

  methods: {
    sortArrayBy: function (type) {
      return function (a, b) {
        if (a[type] < b[type]) return -1
        if (a[type] > b[type]) return 1
        return 0
      }
    },
    orderByTitle: function () {
      this.posts.sort(this.sortArrayBy('title'))
    },
    orderById: function () {
      this.defaultOrder()
    },
    defaultOrder: function () {
      this.posts.sort(this.sortArrayBy('id'))
    }
  }

})