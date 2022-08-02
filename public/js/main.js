//main.js is a launchpad for CRUD requests
//forms can handle routes built in due to its functionality (ex: fetch and post built in features)

const deleteBtn = document.querySelectorAll('.fa-trash') //Creating a variable and assigning it to all elements with the class of fa-trash icon 
const item = document.querySelectorAll('.item span') //Creating a variable and assigning it to ANY span tags inside of a parent that has a class of "item"
const itemCompleted = document.querySelectorAll('.item span.completed') ////Creating a variable and assigning it to a selection of spans with a class of "completed" inside of a parent with a class of "item" 

Array.from(deleteBtn).forEach((element)=>{ //creating a new array from our selection and starting a loop
    element.addEventListener('click', deleteItem) //Add an event listener to the current item that waits for a click and then calls a function called deleteItem
}) //Closes our loop
Array.from(item).forEach((element)=>{ //creating a new array from our selection and starting a loop
    element.addEventListener('click', markComplete) //Add an event listener to the current item that waits for a click and then calls a function called markComplete
}) //Closes our loop

Array.from(itemCompleted).forEach((element)=>{ //creating a new array from our selection and starting a loop
    element.addEventListener('click', markUnComplete) //Adds an event listener to ONLY completed items
}) //Closes our loop

async function deleteItem(){ //Declare an asynchronous function (waiting for some responses to arrive)
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the inner text within the list span, targets the completed span 
    try{ //Starting a try block 
        const response = await fetch('deleteItem', { // Creates a response variable that waits on a fetch to get data from the result of the deleteItem route
            method: 'delete', //Sets the CRUD method for the route
            headers: {'Content-Type': 'application/json'},  //Specifying the type of content expected which is JSON 
            body: JSON.stringify({ // Declares the message content being passed into the body and stringify that content
              'itemFromJS': itemText //Setting the content of the body to the innerText of the list item and  naming it as 'itemFromJS'
            }) //Closing the body
          }) //Closing the object
        const data = await response.json() //Waiting on JSON from the reponse to be converted
        console.log(data) //Logs the result to the console
        location.reload() //reload page to update what is displayed

    }catch(err){ //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    } //close the catch block
} //end the function

async function markComplete(){ ///Declare an asynchronous function (waiting for some responses to arrive)
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the inner text within the list span
    try{ //Starting a try block
        const response = await fetch('markComplete', { // Creates a response variable that waits on a fetch to get data from the result of the markComplete route
            method: 'put', //Sets the CRUD method to "update" for the route
            headers: {'Content-Type': 'application/json'}, //Specifying the type of content expected which is JSON 
            body: JSON.stringify({ // Declares the message content being passed into the body and stringify that content
                'itemFromJS': itemText //Setting the content of the body to the innerText of the list item and  naming it as 'itemFromJS'
            }) //Closing the body
          }) //Closing the object
        const data = await response.json() //Waiting on JSON from the reponse to be converted
        console.log(data) //Logs the result to the console
        location.reload() //reload page to update what is displayed

    }catch(err){ //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    } //close the catch block
} //end the function

async function markUnComplete(){ ///Declare an asynchronous function (waiting for some responses to arrive)
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the inner text within the list span
    try{ //Starting a try block
        const response = await fetch('markUnComplete', { // Creates a response variable that waits on a fetch to get data from the result of the markUnComplete route
            method: 'put', //Sets the CRUD method to "update" for the route
            headers: {'Content-Type': 'application/json'}, //Specifying the type of content expected which is JSON 
            body: JSON.stringify({ // Declares the message content being passed into the body and stringify that content
                'itemFromJS': itemText //Setting the content of the body to the innerText of the list item and  naming it as 'itemFromJS'
            }) //Closing the body
          }) //Closing the object
        const data = await response.json() //responds with JSON data
        console.log(data) //Logs the result to the console
        location.reload() //reload page after todo list item is marked uncompleted

    }catch(err){ //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    } //close the catch block
} //end the function


