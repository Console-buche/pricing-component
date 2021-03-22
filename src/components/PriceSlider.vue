<template>
  <form>
    <input
      id="sel"
      @input="update"
      v-model="sliderVal"
      name="price"
      type="range"
    />
    <div class="output"></div>
  </form>
</template>
<script>
export default {
  name: "PriceSlider",
  data() {
    return {
      sliderVal: null,
    };
  },
  created() {
    window.addEventListener("resize", this.displaceOutput);
  },
  mounted() {
    this.displaceOutput();
  },
  methods: {
    displaceOutput() {
      const input = document.querySelector("#sel");
      const ipt_value = parseInt(input.value, 10);
      let updt_width = window.getComputedStyle(input).width.replace("px", "");
      updt_width = parseInt(updt_width, 10);

      const left = 2 + ((updt_width - 30) / 100) * ipt_value; //hardcoded constant 1 = half the thumb padding

      const opt = document.querySelector(".output");
      opt.style.left = left + "px";
    },

    update() {
      this.displaceOutput();
      this.$emit("updateFromSlider", this.sliderVal);
      // console.log(this.sliderVal);
      const ipt = document.querySelector("#sel");
      ipt.style.background = `linear-gradient(to left, #a5f3eb ${
        100 - this.sliderVal
      }%, #10d5c2 ${100 - this.sliderVal}%)`;
    },
  },
};
</script>
<style lang="sass" scoped>
$softcyan: #a5f3eb
$strongcyan: #10d5c2

form
  position: relative
  margin: 50px 0

.output
  position: absolute
  background: $strongcyan
  width: 30px
  height: 30px
  border-radius: 30px
  top: -3px
  pointer-events: none
  background-image: url('../assets/images/icon-slider.svg')
  background-position: center
  background-repeat: no-repeat
  background-size: 60%

input
  width: 100%
  outline: none
  -webkit-appearance: none
  background: linear-gradient(to left, $softcyan 50%, $strongcyan 50%)
  height: 5px
  border-radius: 5px

  &::-webkit-slider-thumb
    -webkit-appearance: none; /* également nécessaire sur le curseur */
    width: 30px
    height: 30px; /* s'adapte à la hauteur de l'input */
    border: none
    border-radius: 30px
    background: $strongcyan; /* pris en compte sur Webkit only */

  &::hover
    cursor: pointer
</style>