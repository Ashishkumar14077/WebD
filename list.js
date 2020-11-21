console.log("Connected");

var todos=[];
var input=prompt("What would you like to do?");

while(input!=="quit")
{
    if(input==="new")
        addTodo();
    else if(input==="list")
        listTodo();
    else if(input === "delete")
        deleteTodo();
    //    
    var input=prompt("What would you like to do?");
}
console.log("You quit the App");

function addTodo(){
    var newTodo=prompt("Enter New Todo");
    todos.push(newTodo);
    console.log("Added todos");
}
function listTodo()
{
    console.log("Listed TODOs:");
        console.log("***********");
        todos.forEach(function(todo,i){
            console.log(i+ ": " + todo);
        });
        console.log("***********");
}
function deleteTodo()
{
    var index=prompt("Enter the Index to be deleted");
    todos.splice(index,1);
    console.log("Deleted Todo");
}