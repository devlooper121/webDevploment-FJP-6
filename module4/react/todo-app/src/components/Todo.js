import {Component} from "react"
class Todo extends Component {
    constructor(){
        super();
        // this is state which is responsible for holding data about page
        this.state = {
            tasks:[],
            currentTask : "",
        }

    }
    changeHandelar = (e) =>{
        this.setState({
            currentTask: e.target.value,
        })
    }
    newTaskAddHandlar = ()=>{
        this.setState({
            tasks:[...this.state.tasks, {task:this.state.currentTask, id:this.state.tasks.length+1}],
            currentTask:""
        })
    }
    deleteTask = (id) => {
        let updatedTask = this.state.tasks.filter(taskObj=>{
            return taskObj.id != id;
        })
        this.setState({
            tasks : updatedTask, 
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.currentTask} onChange={this.changeHandelar}></input>
                <button onClick={this.newTaskAddHandlar}>Add task</button>
                <ul>
                    {/* for loop will not work here so use map */}
                    {this.state.tasks.map(data=>(
                        <li key={data.id}>
                            <p>{data.task}</p>
                            <button onClick={()=>this.deleteTask(data.id)}> delete </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo;