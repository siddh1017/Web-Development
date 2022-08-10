
// function to take input and update localStorage only
function getAndUpdate() {
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

// update and populate the table too
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
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
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();   // update the table

}
function clearStorage() {    // to remove all TODO's
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the storage')  // clearing the localStorage
        localStorage.clear();
        update()    // updating the table
    }
}
