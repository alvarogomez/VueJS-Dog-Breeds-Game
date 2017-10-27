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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .score-wrapper{
    .counter {
      font-size: 1.9rem;
      background-color: white;
      text-transform: uppercase;
      padding: 0.8rem 0;
      margin: 0.5rem 0px;
      border: 5px solid;
      transition: 0.5s;
      box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.2);
    }
    .hits {
      color: limegreen;
      font-style: bold;
    }
    .fails {
      color: darkred;
      font-style: bold;
    }
  }
</style>
