<template>
    <div>
        <product-list-one></product-list-one>
        <product-list-two></product-list-two>
    </div>
</template>

<script>

import ProductListOne from '../Components/productlist/ProductListOne';
import ProductListTwo from '../Components/productlist/ProductListTwo';

export default {

    
    name: 'Vuex',
    data(){
        return{
            
        }
    },
    components: {
        'product-list-one' : ProductListOne, 
        'ProductListTwo' : ProductListTwo
    }

}


</script>

<style scoped>

</style>