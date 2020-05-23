<template>
    <div>
        <h1>VueX</h1>
        <Result/>
        <AnotherResult/>
        <Counter/>
    </div>
</template>

<script>
import Counter from './Counter';
import Result from './Result';
import AnotherResult from './Result';
export default {
    components:{
        Counter,
        Result,
        AnotherResult
    }
}
</script>