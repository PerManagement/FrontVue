export default{
    createTask({commit},obj){
        let url="task/createTask";
        this.state.axios.get(url).then((response)=>{
            return this.state.elMain=response.data.data; 
        }).catch((ex)=>{
            console.log(ex);
        });
        
    },
    logOut({commit},obj){
           this.state.app_view='login';
           sessionStorage.clear();
           commit('logOut',obj);
    }
}