export default{
    createTask({commit},obj){
        this.state.elMain='createTask';
    },
    findTask({commit},obj){
        this.state.elMain='findTask';
    },
    findTaskByUserId({commit},obj){
        this.state.elMain='findTaskByUserId';
    },
    associateWith({commit},obj){
        this.state.elMain='associateWith';
    },
    createPlan({commit},obj){
        this.state.elMain='createPlan';
    },
    checkTask({commit},obj){
        this.state.elMain='checkTask';
    },
}