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

<style lang="scss">
.buttons-wrapper {
  $animationTime : 0.75s;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  flex-direction: column;
  padding: 0 5rem;
  @media (max-width: 1024px) {
    padding: 0;
  }
  button {
    padding: 0 1rem;
    margin: 0.5rem 0;
    font-weight: bold;
    font-family: monospace;
    color: #2c3e50;
    line-height: 3rem;
    background-color: white;
    text-transform: uppercase;
    font-size: 1.5rem;
    @media (max-width: 1024px) {
      line-height:2rem;
      font-size: 1.2rem;
    }
    border: 4px solid lightgreen;
    outline: 4px solid skyblue;
    transition: 0.2s ease-in;
    text-shadow: 1px 2px 1px lightgrey;
    box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.2);
    &.correct {
      background-color:rgba(124,252,0,1);
      animation: hitAnimation $animationTime infinite cubic-bezier(0.24,-0.12, 0, 1.99);
      @media (max-width: 1024px) {
        transform: scale(1, 1.2);
        animation: hitAnimationMobile $animationTime infinite cubic-bezier(0.24,-0.12, 0, 1.99);
      }
    }
    &.false {
      background-color: darkred;
      animation: failAnimation $animationTime infinite cubic-bezier(0.24,-0.12, 0, 1.99);
      color: white;

      @media (max-width: 1024px) {
        transform: scale(1, 1.2);
        animation: failAnimationMobile $animationTime infinite cubic-bezier(0.24,-0.12, 0, 1.99);
      }
    }
    @keyframes hitAnimation {
      0% {
        background-color:rgba(124,252,0,1);
      }
      30% {
        transform: scale(1, 1.1);
        background-color:rgba(124,252,0,0.7);
      }
      60% {
        transform: scale(1.1, 1);
        background-color:rgba(124,252,0,0.8);
      }
      100% {
        background-color:rgba(124,252,0,1);
      }
    }
    @keyframes failAnimation {
      0% {
        background-color:rgba(139,0,0,1);
      }
      30% {
        transform: scale(1, 1.1);
        background-color:rgba(167,0,0,1);
      }
      60% {
        transform: scale(1.1, 1);
        background-color:rgba(220,0,0,1);
      }
      100% {
        background-color:rgba(255,0,0,1);
      }
    }
    @keyframes hitAnimationMobile {
      0% {
        background-color:rgba(124,252,0,1);
      }
      30% {
        transform: scale(1, 1.01);
        background-color:rgba(124,252,0,0.7);
      }
      60% {
        transform: scale(1.01, 1);
        background-color:rgba(124,252,0,0.8);
      }
      100% {
        background-color:rgba(124,252,0,1);
      }
    }
    @keyframes failAnimationMobile {
      0% {
        background-color:rgba(139,0,0,1);
      }
      30% {
        transform: scale(1, 1.01);
        background-color:rgba(167,0,0,1);
      }
      60% {
        transform: scale(1.01, 1);
        background-color:rgba(220,0,0,1);
      }
      100% {
        background-color:rgba(255,0,0,1);
      }
    }
  }
}
</style>
