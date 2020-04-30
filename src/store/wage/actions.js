export default{
    findWage({commit},obj){
        this.state.elMain='findWage';  
    },
    issueWage({commit},obj){
        this.state.elMain='issueWage';  
    },
    logOut({commit},obj){
           this.state.app_view='login';
           sessionStorage.clear();
           commit('logOut',obj);
    }
}