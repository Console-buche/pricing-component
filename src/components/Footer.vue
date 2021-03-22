<template>
  <footer>
    <div>
      <ul>
        <li>Unlimited webites</li>
        <li>100% data ownership</li>
        <li>Email reports</li>
      </ul>
    </div>
    <div>
      <span>Start my trial</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="sass" scoped>
$softcyan: lightgray
$strongcyan: #10d5c2
$cta: hsl(227, 35%, 25%)
$desatblue: hsl(225, 20%, 60%)

footer
  margin: 50px 0
  display: flex
  justify-content: space-evenly
  align-items: center
  height: 100px

ul
  list-style-type: none
  margin: 0
  padding-left: 15px
  color: $desatblue
  font-size: 15px

  li
    margin-bottom: 10px

    &:before
      content: ''
      width: 20px
      height: 10px
      background-image: url('../assets/images/icon-check.svg')
      background-size: contain
      background-repeat: no-repeat
      background-position: center
      padding-right: 10px
      margin-right: 15px

div
  width: 100%

  &:first-child
    text-align: left

  &:nth-child(2) span
    padding: 12px 50px
    background: $cta
    color: white
    border-radius: 25px

  &:hover
    cursor: pointer

$breakpoint-tablet: 800px
@media (max-width: $breakpoint-tablet)
  footer
    flex-direction: column

  ul
    padding-left: 0

  div
    &:first-child
      text-align: center

    &:nth-child(2)
      margin-top: 40px
</style>