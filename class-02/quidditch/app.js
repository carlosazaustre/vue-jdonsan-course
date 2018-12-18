'use strict'

Vue.component('game-player', {
  template: `
    <div>
      <button @click="useHouse('griffindor')">Griffindor</button>
      <button @click="useHouse('slytherin')">Slytherin</button>
      <button @click="useHouse('ravenclaw')">Ravenclaw</button>
      <button @click="useHouse('hufflepuf')">Hufflepuf</button>
      <figure class="flag" :class="house"></figure>
    </div>
  `,
  data: function () {
    return {
      house: null
    }
  },

  methods: {
    useHouse: function (house) {
      this.house = house
    }
  }
})

const game = new Vue({
  el: '#game',
  data: {
    players: [{
      name: 'Player #1',
      id: 1,
      score: 0,
      isWinner: false
    }, {
      name: 'Player #2',
      id: 2,
      score: 0,
      isWinner: false
    }]
  },
  methods: {
    startGame: function () {
      let winnerName
      this.players[0].score = Math.floor(Math.random() * 100)
      this.players[1].score = Math.floor(Math.random() * 100)

      if (this.players[0].score > this.players[1].score) {
        this.players[0].isWinner = true
        winnerName = this.players[0].name
        
      } else {
        this.players[1].isWinner = true
        winnerName = this.players[1].name
      }

      console.log(`Player #1 Score: ${this.players[0].score}`)
      console.log(`Player #2 Score: ${this.players[1].score}`)
      console.log(`${winnerName} wins!`)
    }
  }

})