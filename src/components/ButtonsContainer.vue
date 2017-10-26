<template>
  <div class="buttons-wrapper">
    <button class="answer-button" v-for="name in answers" v-on:click="clickOnAnswer($event)"> {{ name }} </button>
  </div>
</template>

<script>
export default {
  name: "ButtonsContainer",
  props: ["answers"],
  data: function() {
    return {};
  },
  methods: {
    clickOnAnswer: function(event) {
      this.$emit("answerClicked", event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.buttons-wrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  button {
    width: 30%;
    height: 50px;
    line-height: 50px;
    background-color: cornflowerblue;
    text-transform: uppercase;
    border-radius: 5px;
    color: white;
    font-size: 22px;
    border-width: 1px;
    border-stle: solid;
    &.correct {
      background-color: lawngreen;
    }
    &.false {
      background-color: firebrick;
    }
  }
}
</style>
