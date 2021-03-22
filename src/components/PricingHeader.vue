<template>
  <header>
    <h1>{{ title }}</h1>
    <h5>{{ subt }}</h5>
  </header>
</template>
<script>
export default {
  name: "PricingHeader",
  data() {
    return {
      title: "Simple, traffic-based pricing",
      subt: "Sign-up for our 30-day trial. No credit card required.",
    };
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap')

$htext_color: hsl(227, 35%, 25%)
$subtext_color: hsl(225, 20%, 60%)

header
  font-family: 'Manrope'
  padding: 20px
  color: $htext_color
  background: url('../assets/images/pattern-circles.svg')
  background-repeat: no-repeat
  background-position: center

h1
  margin-bottom: 5px
  letter-spacing: -1px
  font-size: 30px

h5
  font-weight: 600
  color: $subtext_color
  margin-top: 5px
  letter-spacing: .5px
</style>