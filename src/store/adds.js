export default {
  state: {
    adds: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAdd (state, payload) {
      state.adds.push(payload)
    }
  },
  actions: {
    createAdd ({commit}, payload) {
      payload.id = '1234534'
      commit('createAdd', payload)
    }
  },
  getters: {
    adds (state) {
      return state.adds
    },
    promoAdds (state) {
      return state.adds.filter(add => {
        return add.promo
      })
    },
    myAdds (state) {
      return state.adds
    },
    addById (state) {
      return addId => {
        return state.adds.find(add => add.id === addId)
      }
    }
  }
}
