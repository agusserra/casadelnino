<template>
  <div id="app" class="animation-logo">
    <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "../../assets/spinner.json";

export default {
  name: "app",
  components: {
    lottie: Lottie
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData,

        loop: true
      },
      animationSpeed: 1,
      width: "600"
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    },

    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    }
  },
  mounted: function() {
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    this.anim.play;
  }
};
</script>

<style scoped>
.animation-logo {
  width: 600px;
}

@media screen and (max-width: 600px) {
  .animation-logo {
    width: 400px;
  }
}
</style>