<template>
    <div id="chatbot">
        <Head/>
        <Dialog/>
        <Input/>
    </div>
</template>

<script>
    import Head from "./Head";
    import Dialog from "./Dialog";
    import Input from "./Input";

    export default {
        name: "Chatbot",
        components: {
            Head,
            Dialog,
            Input
        }
    }
</script>

<style scoped>

</style>