<template>
    <div>
        <!-- <p>{{quote}}</p> -->
        <slot name="slots"></slot>
        <span style="color:#ccc"><slot name="unNamed">The SubTitle</slot></span>
        <slot></slot>
    </div>
</template>


<script>
export default {
    props:['quote']
}
</script>


<style scoped>

div{
    border:  1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
}

/* h2{
    color:cornflowerblue
} */

</style>