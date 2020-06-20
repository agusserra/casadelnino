<template>
  <div class="loader">
    <div>
    <animation-loader></animation-loader>
    </div>
  </div>
</template>


<script>
import AnimationLoader from '../animations/Loader.vue'

export default {
  
  data() {
    return {};
  },
  computed: {
    
  },
  components:{
    AnimationLoader: AnimationLoader

  },
  methods: {}
};
</script>

<style scoped>
</style>