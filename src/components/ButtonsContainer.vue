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
  flex-direction: column;
  padding: 0 5rem;
  button {
    padding: 0 2rem;
    font-weight: bold;
    font-family: monospace;
    color: #2c3e50;
    line-height: 65px;
    background-color: white;
    text-transform: uppercase;
    font-size: 30px;
    border: 4px solid lightgreen;
    transition: 0.3s ease-in;
    text-shadow: 1px 2px 1px lightslategrey;
    box-shadow: 2px 2px 1px rgba(0,0,0,0.2);
    &:focus {
      outline: none;
    }
    &.correct {
      transform: scale(1.1, 1.1);
      background-color: lawngreen;
    }
    &.false {
      transform: scale(1.1, 1.1);
      background-color: darkred;
      color: white;
    }
  }
}
</style>
