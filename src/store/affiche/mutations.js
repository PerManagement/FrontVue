export default{
    
    findAffiches2(state,rootState){
        let url="affiche/findAffiches";
        this.state.axios.get(url).then((response)=>{
            console.log(response.data);
            return this.state.pageInfo=response.data.pageInfo; 
        }).catch((ex)=>{
            console.log(ex);
        });
        
    },
    
    findAffiches(state,rootState) {
        let url="affiche/findAffiches?page=" + page + "pageSize=" + pageSize;
        this.state.axios.get(url).then((response)=>{
            console.log(response.data);
            return this.state.pageInfo=response.data.pageInfo; 
        }).catch((ex)=>{
            console.log(ex);
        });
    },
}