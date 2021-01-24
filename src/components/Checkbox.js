import React from 'react';




const Checkbox = (props) => {
    function handleRemove(key) {
        console.log(key)
    };

    return (
        <div class="ui checkbox item" >
            <input type="checkbox" name="example" onClick={console.log('props.id')}/>
                 <label>{props.task}</label>
        </div>
    );


}

export default Checkbox;