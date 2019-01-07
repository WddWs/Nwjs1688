<template>
<div class="hello">
    <span @click="logIn">登录</span> <span @click="tomyTools">进入工具{{tooladdr}}</span>
    <webview :src="tooladdr" id="webview" style="width:1230px;height:600px;display: block;" partition="persist:googlepluswidgets" ref="webviews"></webview>
</div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App2',
            tooladdr: "http://lwurl.to/epwKp"
        }
    },
    mounted() {

        var webview = document.querySelector('#webview');

        webview.addEventListener('newwindow', function (e) {
            //prevent the link from attempting to open a new window        
            e.preventDefault();
            webview.src = e.targetUrl;
        });
        // console.log(webview)
        // webview.request.onBeforeSendHeaders.addListener(
        //     function (details) {
        //         // details.requestHeaders.forEach(function (header) {
        //         //     if (header.name === "Cookie") {
        //         //         console.log(header)
        //         //     }
        //         // })
        //         console.log(details)
        //     }, {
        //         urls: ["<all_urls>"]
        //     },
        //     ["blocking", "requestHeaders"]
        // )

    },
    methods: {
        tomyTools() {
            this.tooladdr = "http://lwurl.to/epwKp"
        },
        logIn() {
            this.tooladdr = "https://login.1688.com/member/signin.htm?Done=http%3A%2F%2Fpc.1688.com%2Fisv%2FbusinessAssistant%2FAssistantDetail.htm%3FfreeMkey%3Dk_10256906%26commercialMkey%3Dk_10256910"
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
