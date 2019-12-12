<template>
    <div>
        <div>{{message}}</div>
        <!--&lt;!&ndash;<button :click="showDiv">Show div</button>&ndash;&gt;-->
        <!--<div>{{result}}</div>-->
        <!--<div>{{apiKey}}</div>-->
        <!--<div>{{api}}</div>-->
    </div>
</template>

<script>
    // const parameter = process;
    export default {
        name: "TestComponent",
        data: function(){
            return{
                message: "Test component",
                env: process.env
            }
        },
        methods:{
            showDiv(){
                this.result = process
            }
        }

    }
</script>

<style scoped>

</style>