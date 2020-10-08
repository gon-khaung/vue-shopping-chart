<template>
  <div>
    <Nav/>
    <!-- <Loader/> -->
    <slot/>
  </div>
</template>

<script>
import Nav from './Nav';
// import Loader from '../Component/Loader';
export default {
    components:{Nav},
  name: "Master",
};
</script>