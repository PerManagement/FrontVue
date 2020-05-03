export default{    
    createTask({commit},obj){
        let url="affiche/findAffiches";
        this.state.axios.get(url).then((response)=>{
            return this.state.elMain=response.data.data; 
        }).catch((ex)=>{
            console.log(ex);
        });
        
    },
}