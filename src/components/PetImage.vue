<template>
  <div class="pet-image-wrapper">
      <img :src="myUrlImage" />
  </div>
</template>

<script>
export default {
  name: "PetImage",
  props: ["myUrlImage"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.pet-image-wrapper {
  width: 100%;
  img {
    border: 5px solid black;
    height: auto;
    max-height: 450px
  }
}
</style>
