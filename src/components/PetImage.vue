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
    max-height: 550px;
    box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.2);
    width: auto;
    @media (max-width: 1024px) {
      max-height: none;
      height: auto;
      width: 50%;
    }
  }
}
</style>
