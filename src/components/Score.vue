<template>
  <div class="score-wrapper">
    <p class="hits counter" v-if="hits>0" v-on:change="foo">Hits: {{hits}}</p>
    <p class="fails counter" v-if="fails>0">Fails: {{fails}}</p>
  </div>
</template>

<script>
export default {
  name: "Score",
  props: ["hits", "fails"],
  data: function() {
    return {};
  },
  methods: {
    foo: function() {
      console.log("fooo");
    }
  }
};
</script>

<style lang="scss">
  .score-wrapper{
    margin-top: -1rem;
    .counter {
      font-size: 1.5rem;
      background-color: white;
      text-transform: uppercase;
      padding: 0.5rem 0;
      margin: 1rem 0px;
      border: 5px solid;
      transition: 0.5s;
      box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.2);
      text-shadow: 1px 2px 1px lightgrey;
      @media (max-width: 1024px) {
        padding: 0.25rem 0;
        font-size: 1.2rem;
      }
    }
    .hits {
      color: limegreen;
      outline: 5px solid lightgreen;
      font-style: bold;
    }
    .fails {
      color: darkred;
      outline: 5px solid indianred;
      font-style: bold;
    }
  }
</style>
