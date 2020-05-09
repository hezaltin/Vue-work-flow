export const FruitsMixins =  {
    data(){
        return {
            fruits:['Apple','Mango','Banana','Melon','Pomogranete'],
            filterText:''
        }
    },
    computed:{
        filtertexts(){
            return this.fruits.filter(item=>{
                return item.match(this.filterText)
            })
        }
    }
}