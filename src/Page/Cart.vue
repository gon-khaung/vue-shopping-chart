<template>
<div>
    <Master>
        <div class="container">
            <table class="table table-dark text-center mt-3">
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>+ or -</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                <tr v-for="(p,i) in cart" :key="i">
                    <td width="30%" scope="row">{{p.Title}}</td>
                    <td width="20%">
                        <img :src="p.img" width="50%">
                    </td>
                    <td>
                        <span @click="add(p)" class="btn btn-sm btn-success">+</span>
                        <span @click="reduce(p)" class="btn btn-sm btn-danger">-</span>
                    </td>
                    <td>{{p.qty}}</td>
                    <td>{{p.price}}</td>
                    <td>{{p.price*p.qty}}</td>
                </tr>
            </table>
        </div>
    </Master>
</div>
</template>

<script>
import Master from '../Layout/Master';
export default {
    components:{Master},
    name:'Cart',
    data()
    {
        return{
            cart:[],
        }
    },
    created(){
        this.cart = this.$root.cart;
    },
    methods:{
        add(p){
            p.qty++;
        },
        reduce(p){
            p.qty--;
        }
    }
}
</script>