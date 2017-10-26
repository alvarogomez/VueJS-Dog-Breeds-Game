<template>
  <div class="page-wrapper">
    <h1>Choose the correct breed:</h1>
    <score :hits="hits" :fails="fails"></score>
    <pet-image :myUrlImage="urlImage"></pet-image>
    <buttons-container :answers="breedsAnswers" v-on:answerClicked="clickOnAnswer"></buttons-container>
  </div>
</template>

<script>
import Score from "./Score";
import petImage from "./PetImage";
import ButtonsContainer from "./ButtonsContainer";

const breedsListURL = "https://dog.ceo/api/breeds/list";
const randomBreedImgURL = "https://dog.ceo/api/breeds/image/random";
const numberOfAnswers = 3;
const timeAfterAnswer = 1000;

export default {
  name: "Home",
  components: {
    Score,
    petImage,
    ButtonsContainer
  },
  data: function() {
    return {
      breeds: [],
      urlImage: "",
      questionBreedIndex: 0,
      breedsAnswers: ["a", "b", "c"],
      hits: 0,
      fails: 0
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
          this.init();
        }, timeAfterAnswer);
      } else {
        event.target.classList.add("false");
        this.fails = this.fails + 1;
        setTimeout(() => {
          event.target.classList.remove("false");
          this.init();
        }, timeAfterAnswer);
      }
    },
    getBreeds: async function() {
      const dataBreeds = await this.$http.get(breedsListURL);
      const dataJSON = await dataBreeds.json();
      this.breeds = dataJSON.message;

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
    setIndexes: function() {
      let randomNum = Math.random();
      this.numberOfBreeds = this.breeds.length;
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
    },
    init: async function() {
      await this.getBreeds();
      this.setIndexes();
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .page-wrapper {
    h1 {
      display: block;
      text-shadow: 1px 1px 1px lightslategray;
    }
  }
</style>
