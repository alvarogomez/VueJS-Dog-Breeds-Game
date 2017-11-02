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

<style lang="scss">
.pet-image-wrapper {
  width: 100%;
  img {
    border: 5px solid black;
    outline: 5px solid lightgrey;
    max-height: 380px;
    box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.2);
    width: auto;
    @media (max-width: 1024px) {
      max-height: 225px;
    }
  }
}
</style>
