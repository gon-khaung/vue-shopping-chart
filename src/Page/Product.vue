<template>
<div>
    <Master>
        <!-- container -->
        <Loader v-show="isLoad"/>
        <div class="row" v-show="!isLoad">
            <div v-for="(p,i) in products" :key="i" class="col-md-4">
                <div class="card m-3 p-3">
                    <div class="card-header">{{p.Title}}</div>
                    <div class="card-body">
                        <img width="100%" :src="p.img">
                    </div>
                    <div class="card-footer">
                        <span>Price:<small>${{p.price}}</small></span>
                        <a @click="addToCart(p)" class="btn btn-sm btn-dark float-right">Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </Master>
</div>
</template>

<script>
import Master from '../Layout/Master';
import Loader from '../Component/Loader';
import axios from 'axios';
export default {
    components:{Master, Loader},
    name:'Product',
    data(){
        return {
            isLoad:true,
            products:[],
        }
    },
    created(){
        axios.get('http://cors-anywhere.herokuapp.com/https://unploughed-acre.000webhostapp.com/product.json')
        .then(res=>{
            this.products = res.data;
            this.isLoad = false;
        })
    },
    methods:{
        addToCart(p)
        {
            var cart = this.$root.cart;
            var isinCart = cart.find(v=>{
                return v.Title==p.Title;
            });
            if(isinCart)
            {
                isinCart.qty++;
            }else{
                cart.push({...p,qty:1});
            }
        },
    },
};
</script>