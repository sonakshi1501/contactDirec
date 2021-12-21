let contacts = []

document.getElementById('adddatabtn').addEventListener('click', addData)

function addData() {
    let Name = document.getElementById('name').value
    let Email = document.getElementById('email').value
    let Number = parseInt(document.getElementById('number').value)

    if (Name.length > 0) {
        let holddata = {
            name: Name,
            email: Email,
            number: Number
        }
        contacts.push(holddata)
        printData()

    }
    else {
        alert("No data found")
    }

    
}

function printData() {
    document.getElementById('data').innerHTML = ``
    for (let i = 0; i < contacts.length; i++) {
        document.getElementById('data').innerHTML += `
            <tr>
                <td>${contacts[i].name}</td>
                <td>${contacts[i].email}</td>
                <td>${contacts[i].number}</td>
                <td>
                <button onclick="deleteData(${i})"> Delete </button>
                </td>
            </tr>
            `
    }
}
function deleteData(index){
    if(confirm('Are you sure')){
        contacts.splice(index,1)
        printData()
    }
}
printData()