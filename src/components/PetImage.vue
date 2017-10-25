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
.pet-img-container {
  width: 100%;
  img {
    height: auto;
    max-height: 450px;
    box-shadow: #d4dee2 5px 5px;
  }
}
</style>
