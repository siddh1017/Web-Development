
// function to take input and update localStorage only
// making the content as ID of all the elements (title and descriptions) 
// and value as the itemJsonArray 
 
function getAndUpdate() {
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('content') == null) {   
        // checking if there is any value of key content
        itemJsonArray = [];            // if not creating its value as the array 
        itemJsonArray.push([tit, desc]);    // pushing values in array
        localStorage.setItem('content', JSON.stringify(itemJsonArray))
        // setting the value of ID content .. as the array after converting it in string
    }
    else {
        // if array already has elements (=> content != null)
        itemJsonArrayStr = localStorage.getItem('content')   // fetchong value (array) 
        itemJsonArray = JSON.parse(itemJsonArrayStr);    // parsing it in obj as it would be in string format
        itemJsonArray.push([tit, desc]);    // pushing new values
        localStorage.setItem('content', JSON.stringify(itemJsonArray))  // updating key value again as same
    }
    update();
}

// update and populate the table too
function update() {
    if (localStorage.getItem('content') == null) {
        itemJsonArray = [];
        localStorage.setItem('content', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('content')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {   // iterating through the each obj of table array 
        str += `
                <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>   
                <td>${element[1]}</td> 
                <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                </tr>`;
    });
    // elemetn[0] -> title
    // element[1] -> description
    tableBody.innerHTML = str;  // adding the content in the body of table
}

add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);  // if the "Add" is clicked then localstortage(itemJson) and itenJsonArray are updated and table is populated
update();                                       // else just update content

// function for deleting each element
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('content')
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('content', JSON.stringify(itemJsonArray));
    update();   // update the table

}
function clearStorage() {    // to remove all TODO's
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the storage')  // clearing the localStorage
        localStorage.clear();
        update()    // updating the table
    }
}
