<template>
  <div>
    <PhraseStart @connectButtonClicked="isConnectButtonClicked = true" />
    <transition name="fade">
      <PhraseFound v-show="isConnectButtonClicked" />
    </transition>
  </div>
</template>

<script>
import PhraseStart from "./PhraseStart";
import PhraseFound from "./PhraseFound";
export default {
  name: "Dialog",
  components: {
    PhraseStart,
    PhraseFound
  },
  data: function() {
    return {
      isConnectButtonClicked: false
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
