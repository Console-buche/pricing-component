<template>
  <div class="pricing">
    <PricingHeader />
    <PricingWindow />
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import PricingWindow from "@/components/PricingWindow.vue";
import PricingHeader from "@/components/PricingHeader.vue";

export default {
  name: "Pricing",
  components: {
    PricingWindow,
    PricingHeader,
  },
};
</script>
<style lang="sass" scoped>
.pricing
  display: flex
  flex-direction: column
  align-items: center
</style>
