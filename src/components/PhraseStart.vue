<template>
  <div class="phrase">
    <p>{{ text }}</p>
    <button @click="$emit('connectButtonClicked')">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "PhraseStart",
  data: function() {
    return {
      id: 45,
      text:
        "Willkommen! Mit diesem Service möchten wir dir eine/n\n" +
        "      Gebärdensprachdolmetscher/in zur Verfügung stellen. Klicke auf den Button,\n" +
        "      um mit einem/einer verfügbaren Gebärdensprachdolmetscher/in verbunden zu\n" +
        "      werden.",
      buttonText: "Verbinde mich"
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
