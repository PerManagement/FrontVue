export default{
    login({commit},obj){
        let url="login/doLogin";
        this.state.axios.post(url,obj).then((response)=>{
            if(response.data.data==null){
                alert(response.data.message);
                this.state.returnMessage=response.data.message;
            return this.state.app_view='login';
               
            } 
            this.state.returnMessage="";
            commit('login',response.data.data);
            sessionStorage.setItem("users",JSON.stringify(response.data.data));
            sessionStorage.setItem("app_view","index");
            this.state.app_view='index';
        }).catch((ex)=>{
            console.log(ex);
        });
        
    },
    logOut({commit},obj){
           this.state.app_view='login';
           sessionStorage.clear();
           commit('logOut',obj);
    },

    //切换管理员界面
    createUser({commit},obj){
        let url="";
    }
}