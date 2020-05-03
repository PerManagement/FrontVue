export default{
    createTask({commit},obj){
        this.state.elMain='createTask';
    },
    findTask({commit},obj){
        this.state.elMain='findTask';
    },
}