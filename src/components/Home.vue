<template>
  <div class="page-wrapper">
    <header>
      <h1>Choose the correct breed</h1>
    </header>
    <div class="components">
      <spinner class="spinner" v-if="(loadingImage == true) || (loadingAnswers == true)"></spinner>
      <pet-image class="flex-1" v-bind:class="{shrink: loadingImage}" :myUrlImage="urlImage"></pet-image>
      <buttons-container class="flex-1" v-bind:class="{shrink: loadingAnswers}" :answers="breedsAnswers" v-on:answerClicked="clickOnAnswer"></buttons-container>
    </div>
    <div class="scorebox">
      <score class="":hits="hits" :fails="fails"></score>
    </div>
  </div>
</template>

<script>
import Score from "./Score";
import petImage from "./PetImage";
import ButtonsContainer from "./ButtonsContainer";
import Spinner from "./Spinner";

const breedsListURL = "https://dog.ceo/api/breeds/list";
const randomBreedImgURL = "https://dog.ceo/api/breeds/image/random";
const numberOfAnswers = 3;
const timeAfterAnswer = 1500;

export default {
  name: "Home",
  components: {
    Score,
    petImage,
    ButtonsContainer,
    Spinner
  },
  data: function() {
    return {
      breeds: [],
      urlImage: "",
      questionBreedIndex: 0,
      breedsAnswers: ["a", "b", "c"],
      hits: 0,
      fails: 0,
      loadingImage: true,
      loadingAnswers: true,
      columns: true
    };
  },
  methods: {
    clickOnAnswer: function(event) {
      if (
        event.target.innerText.toLowerCase() ==
        this.breeds[this.questionBreedIndex]
      ) {
        event.target.classList.add("correct");
        this.hits = this.hits + 1;
        setTimeout(() => {
          event.target.classList.remove("correct");
          this.shrinkImage = true;
          this.init();
        }, timeAfterAnswer);
      } else {
        event.target.classList.add("false");
        this.fails = this.fails + 1;
        setTimeout(() => {
          event.target.classList.remove("false");
          this.shrinkImage = true;
          this.init();
        }, timeAfterAnswer);
      }
    },
    getBreeds: async function() {
      const dataBreeds = await this.$http.get(breedsListURL);
      const dataJSON = await dataBreeds.json();
      this.breeds = dataJSON.message;
      this.numberOfBreeds = this.breeds.length;

      return "done";
    },
    shuffle: function(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    },
    setQuestion: function() {
      let randomNum = Math.random();
      this.questionBreedIndex = Math.floor(randomNum * this.breeds.length);
    },
    setConcreteImage: async function() {
      let url =
        "https://dog.ceo/api/breed/" +
        this.breeds[this.questionBreedIndex] +
        "/images/random";
      const dataImg = await this.$http.get(url);
      const dataJSON = await dataImg.json();
      this.urlImage = dataJSON.message;
      this.loadingImage = false;
      return "done";
    },
    setAnswers: function() {
      let answers = [];
      answers.push(this.breeds[this.questionBreedIndex]);
      if (this.breeds.length >= numberOfAnswers) {
        while (answers.length < numberOfAnswers) {
          let randomNum = Math.random();
          let index = Math.floor(randomNum * this.breeds.length);
          if (answers.indexOf(this.breeds[index]) == -1) {
            answers.push(this.breeds[index]);
          }
        }
      }
      this.breedsAnswers = this.shuffle(answers);
      this.loadingAnswers = false;
    },
    init: async function() {
      if (!this.breeds.length) {
        await this.getBreeds();
      }
      this.setQuestion();
      await this.setConcreteImage();
      this.setAnswers();
      return "done";
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="scss">
  .page-wrapper {
    font-family: monospace;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    header {
      border: 3px solid lightgreen;
      outline: 3px solid skyblue;
      background-color: #d5ffd5;
      margin-top: 1rem;
      font-size: 1.1rem;
      box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.2);
    }
    h1 {
      text-transform: uppercase;
      display: block;
      text-shadow: 1px 1px 1px lightslategray;
    }
    .components{
      display: flex;
      padding: 2rem 0;
      @media (max-width: 1024px) {
          flex-direction: column;
      }
      .shrink {
        transition: 0.1s;
        opacity:0;
      }
    }
    .flex-1 {
      flex: 1 1;
    }
  }
</style>
