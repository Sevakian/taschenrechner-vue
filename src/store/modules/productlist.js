

const state = {
    products: [
        {name: 'Bana Skin', price: 20},
        {name: 'Shayalalam', price: 80},
        {name: 'Bratan', price: 70},
        {name: 'Uyuz', price: 30},
      ]   
};

const getters = {
    saleProducts: state => {
        var saleProducts = state.products.map(product => {
          return {
              name: '**' + product.name + '**',
              price: product.price/2
          }
      });
      return saleProducts;
      }
};

const actions = {
    reducePrice: (context, payload) => {
        setTimeout(function(){
          context.commit('reducePrice', payload);
        },1000)
      }  
};

const mutations = {
    
    reducePrice: (state, payload) => {
        state.products.forEach(product => { product.price -= -payload})
        
    } 
   
};

export default {
    state,
    getters,
    actions,
    mutations
}