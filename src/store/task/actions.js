export default{
    createTask({commit},obj){
       
        let url="task/createTask"
        this.state.axios.get(url).then((response)=>{
            console.log(response);
            return this.state.elMain=response.data.data; 
        }).catch((ex)=>{
            this.state.elMain='Nopermission';
            console.log("您没有权限");
        });
        
    },
    
}