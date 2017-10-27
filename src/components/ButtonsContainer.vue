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
  margin-top: 1rem;
  flex-direction: column;
  padding: 0 5rem;
  @media (max-width: 1024px) {
    padding: 0;
  }
  button {
    padding: 0 2rem;
    margin: 0.5rem 0;
    font-weight: bold;
    font-family: monospace;
    color: #2c3e50;
    line-height: 5rem;
    background-color: white;
    text-transform: uppercase;
    font-size: 30px;
    border: 4px solid lightgreen;
    transition: 0.2s ease-in;
    text-shadow: 1px 2px 1px lightslategrey;
    box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.2);
    &:focus {
      outline: none;
    }
    &.correct {
      transform: scale(1.1, 1.1);
      background-color: lawngreen;
      @media (max-width: 1024px) {
        transform: scale(1, 1.2);
      }
    }
    &.false {
      transform: scale(1.1, 1.1);
      background-color: darkred;
      color: white;
      @media (max-width: 1024px) {
        transform: scale(1, 1.2);
      }
    }
  }
}
</style>
