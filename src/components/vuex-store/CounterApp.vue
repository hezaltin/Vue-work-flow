<template>
    <div>
        <h1>VueX</h1>
        <Result/>
        <Counter/>
    </div>
</template>

<script>
import Counter from './Counter';
import Result from './Result'
export default {
    components:{
        Counter,
        Result
    }
}
</script>