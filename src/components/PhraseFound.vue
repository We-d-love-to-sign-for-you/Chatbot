<template>
  <div class="phrase">
    <p>{{ text }}</p>
    <button>{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "PhraseFound",
  data: function() {
    return {
      id: 45,
      text: "Super! Wir haben eine/n Dolmetscher/in für dich gefunden.",
      buttonText: "Videokonferenz starten"
    };
  }
};
</script>

<style scoped>
button {
  background-color: #dcdcdc;
  border: none;
  color: #9c9c9c;
  margin: 10px 0 0 10px;
  padding: 8px 18px;
  text-align: center;
  text-decoration: none;
  border-radius: 40px;
  display: block;
  font-size: 13px;
}
p {
  padding: 10px 0 0 0;
  font-size: 0.9em;
  color: #555555;
}
</style>
