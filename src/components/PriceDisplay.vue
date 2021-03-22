<template>
  <ul>
    <li class="page_views">{{ pageViews }}</li>
    <li class="pricePerMonth">
      <span class="price--normal">${{ updatePrice() }}</span
      ><span class="sub"> / month</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "PriceDisplay",
  props: {
    updatedPrice: {
      type: Number,
    },
    thumbPos: {
      type: Number,
    },
    discountOn: {
      type: Boolean,
    },
  },
  data() {
    return {
      pageViews: "100k pageviews",
      newPrice: 0,
    };
  },
  methods: {
    proutosse(v) {
      console.log(v);
    },
    updatePrice() {
      let new_price = this.updatedPrice + this.thumbPos;
      new_price = this.discountOn ? new_price * 0.75 : new_price;
      const displayPrice = new_price.toFixed(2);
      return (this.newPrice = displayPrice);
    },
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap')

$htext_color: hsl(227, 35%, 25%)
$subtext_color: hsl(225, 20%, 60%)

ul
  list-style-type: none
  margin: 0
  padding: 0
  display: flex
  justify-content: space-between
  align-items: center
  font-family: 'Manrope'
  margin: 20px 0

.page_views
  color: $subtext_color
  text-transform: uppercase
  letter-spacing: 2px
  font-size: 0.75em
  font-weight: 800

.price--normal
  font-size: 36px
  font-weight: bold
  color: htext_color
  padding: 0 5px

.pricePerMonth
  display: flex
  align-items: center
  text-transform: lowercase

  .sub
    color: $subtext_color
    font-size: 0.85em
</style>