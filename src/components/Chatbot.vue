<template>
    <div id="chatbot">
        <ChatbotHead/>
        <Dialog/>
        <ChatbotInput/>
    </div>
</template>

<script>
    import ChatbotHead from "./ChatbotHead";
    import Dialog from "./Dialog";
    import ChatbotInput from "./ChatbotInput";

    export default {
        name: "Chatbot",
        components: {
            ChatbotHead,
            Dialog,
            ChatbotInput
        }
    }
</script>

<style scoped>

</style>