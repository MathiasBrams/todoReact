import React, {useState} from 'react';
import Checkbox from './components/Checkbox';
import {v4 as uuidv4} from 'uuid';


function App () {
    const [list, setList] = useState([]);
    const [task, setTask] = useState('');


    // helper function to update the name of the new task
    const writeTask = (e) => {
        
        setTask(e.target.value)
        

        console.log(task)
    }
    // helper function to handle the submit of a new todo task to the todo list
    function addTask(e) {
        e.preventDefault();
        const newList = list.concat({ task, id: uuidv4() });
     
        setList(newList);
        // resets input field
        setTask('');
    }

    return (
    <div className="ui container">
        {/* input for todos, has to create checkbox items in list*/}
        <div class="ui input focus">
            <form onSubmit={addTask}>
                <input type="text" placeholder="Create a task you lazy cunt.." value={task}
                onChange={writeTask}
                />
            </form>
            
            {/* params for input once state is made: onSubmit={} value={} onChange={}*/}
        </div>
        {/* ui list tag ensures the checkboxes are shown listed vertically */}
        {/* checkbox component takes prop of task*/}
        <div className="ui list">
                {list.map((item) => (
                    <Checkbox key={item.id} task={item.task}/>
                ))}
        </div>
    </div>
    )
};

export default App;