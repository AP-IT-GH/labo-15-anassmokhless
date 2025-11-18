import todo from "../todos.json" with {type: 'json'};

let todoArray = todo;

function getCompleted(todoList){
    for(let i = 0; i<todoArray.length; i++){
        if(todoList[i].completed === true){
            console.log(todoList[i].title);
        }
    }
}

getCompleted(todoArray);