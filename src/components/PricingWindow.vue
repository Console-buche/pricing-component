<template>
  <section>
    <!-- Select component -->
    <PriceDisplay
      :updatedPrice="updatedPrice"
      :thumbPos="thumbPos"
      :discountOn="discountOn"
    />
    <PriceSlider @updateFromSlider="update" />
    <BillingOptions @yearly-discount="applyDiscount" />
    <Footer />
  </section>
</template>
<script>
import PriceDisplay from "@/components/PriceDisplay.vue";
import PriceSlider from "@/components/PriceSlider.vue";
import BillingOptions from "@/components/BillingOptions.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "PricingWindow",
  components: {
    PriceDisplay,
    PriceSlider,
    BillingOptions,
    Footer,
  },
  data() {
    return {
      updatedPrice: 16,
      thumbPos: 0,
      discountOn: false,
    };
  },
  methods: {
    update(e) {
      this.thumbPos = parseInt(e, 10);
    },
    applyDiscount(e) {
      this.discountOn = e;
    },
  },
};
</script>

<style lang="sass" scoped>
section
  padding: 20px
  min-width: 350px
  width: 100%
  max-width: 700px
  box-shadow: 0px 10px 28px -20px #000

$breakpoint-tablet: 800px
@media (max-width: $breakpoint-tablet)
  section
    max-width: 400px
</style>