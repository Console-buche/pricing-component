<template>
  <form>
    <div>
      <label class="option">Monthly Billing</label>
      <ToggleBilling @change-billing="updateDiscount" />
      <label class="option">Yearly Billing</label>
      <label v-show="discountOn" class="option option--discount" for="monthly"
        >25% discount</label
      >
    </div>
  </form>
</template>
<script>
import ToggleBilling from "./ToggleBilling.vue";
export default {
  name: "BillingOptions",
  components: {
    ToggleBilling,
  },
  data() {
    return {
      discountOn: false,
    };
  },
  methods: {
    updateDiscount(e) {
      this.discountOn = e;
      this.$emit("yearly-discount", this.discountOn);
    },
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap')

$htext_color: hsl(227, 35%, 25%)
$subtext_color: hsl(225, 20%, 60%)
$lightgrayishred: hsl(14, 92%, 95%)
$lightred: hsl(15, 100%, 70%)

div
  display: flex
  justify-content: center
  align-items: center
  position: relative

.option
  color: $subtext_color
  letter-spacing: 1px
  font-size: 0.75em
  font-weight: 400
  margin: 0 10px

  &--discount
    position: absolute
    font-weight: 800
    background: $lightgrayishred
    border-radius: 50px
    padding: 0 10px
    font-size: 0.7em
    right: 10%
    margin: 0
    color: $lightred
</style>