<template>
  <div class="score-wrapper">
    <p class="hits counter" v-if="hits>0">Hits: {{hits}}</p>
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
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .score-wrapper{
    .counter {
      font-size: 1.5rem;
      background-color: white;
      padding: 0.3rem 0;
      margin: 0.3rem 0px;
      border: 1px solid;
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
