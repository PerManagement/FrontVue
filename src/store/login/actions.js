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
            console.log(response.data.data);
            
        }).catch((ex)=>{
            console.log(ex);
        });
        
    },
    logOut({commit},obj){
        let url="login/logout";
        this.state.axios.post(url).then((response)=>{
            console.log(response.data.data);
            if(response.data.data.message=='注销成功'){
                this.state.app_view='login';
                sessionStorage.clear();
                commit('logOut',obj);
            }
        }).catch((ex)=>{
            console.log(ex);
        });
        
    },

    //切换管理员界面 let url="";
    createUser({commit},obj){
        this.state.elMain='createUser';
    },
    addDimission({commit},obj){
        this.state.elMain='addDimission';
    },
    showDimission({commit},obj){
        this.state.elMain='showDimission';
    }
}