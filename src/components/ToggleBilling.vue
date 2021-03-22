<template>
  <label class="billingToggle">
    <input @change="updateBilling" type="checkbox" />
    <span class="slider circle"></span>
  </label>
</template>
<script>
export default {
  name: "ToggleBilling",
  data() {
    return {
      isYearly: false,
    };
  },
  methods: {
    updateBilling() {
      this.isYearly = !this.isYearly;
      this.$emit("change-billing", this.isYearly);
      return this.isYearly;
    },
  },
};
</script>
<style lang="sass" scoped>
$lightgrayishblue: hsl(223, 50%, 87%)
$strongcyan: #10d5c2

$height: 24px
$width: $height*2

.billingToggle
  position: relative
  height: $height
  width: $width
  cursor: pointer

.slider
  display: flex
  align-items: center
  position: absolute
  bottom: 0
  left: 0
  right: 0
  top: 0
  background: $lightgrayishblue
  cursor: pointer
  -webkit-transition: .4s
  transition: .4s
  border-radius: $width

  &:before
    content: ''
    position: absolute
    background: #fff
    border-radius: 50%
    height: 20px
    width: 20px
    left: 3px
    right: 50px
    transition: 0.2s all cubic-bezier(0.5, 0.1, .7, 0.1)

  input:checked + &
    background: $strongcyan

  input:checked + &:before
    left: calc(100% - #{$height})

    &.circle
      border-radius: 20px
</style>