<template>
<div class="hello">
    <span @click="logIn">登录</span> <span @click="tomyTools">进入工具</span>
    <iframe :src="tooladdr"></iframe>
</div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App2',
            tooladdr: ""
        }
    },
    mounted() {},
    methods: {
        tomyTools() {
            this.tooladdr = "http://lwurl.to/epwKp"
        },
        logIn() {
            window.open("https://login.1688.com/member/signin.htm?Done=http%3A%2F%2Fpc.1688.com%2Fisv%2FbusinessAssistant%2FAssistantDetail.htm%3FfreeMkey%3Dk_10256906%26commercialMkey%3Dk_10256910")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
iframe {
    width: 900px;
    height: 500px;
}
</style>
