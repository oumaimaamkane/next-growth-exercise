// Users Table
let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
        {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
    ];

// Call the the function to display and fill the table
fillTable(users);

//Fill The table with users
function fillTable(data){
    var i=0;
    var table = document.getElementById('body');
    
    for(i ; i<data.length ; i++){
        var myDate = new Date(data[i].createdDate);
        var day=myDate.getDate();
        var month=myDate.getMonth()+1;
        var year =myDate.getFullYear();

        table.innerHTML+=`<tr>
                            <td>`+data[i].id+`</td>
                            <td>`+day+`/`+month+`/`+year+`</td>
                            <td><span class='span'>`+data[i].status+`</span></td>
                            <td>`+data[i].lastName+`</td>
                            <td>`+data[i].firstName+`</td>
                            <td>`+data[i].userName+`</td>
                            <td>`+data[i].registrationNumber+`</td>
                            <td>
                                <button type="button" class='btn' onclick='deleteUser(`+i+`)'><i class='fa fa-trash'></i></button>
                            </td>
                        </tr>`
        // Apply the style to every span 
        styling(i,data[i].status);
    }
}

// Form Submition 
function FormSubmition(){
    insertUser();
}

// Read User Data From The Form
function readData(){
    var data={};
    data['id']=(Math.floor(Math.random()*111111111));
    data['createdDate'] = document.querySelector('#creationDate').value;
    data['status'] = document.querySelector('#status').value;
    data["firstName"] = document.querySelector('#firstName').value;
    data["lastName"] = document.querySelector('#lastName').value;
    data["userName"] = document.querySelector('#userName').value;
    data["registrationNumber"] = document.querySelector('#registrationNumber').value;
    return data;
}

// Insert the Data into the table
function insertUser(){
    // get The user data
    var data =readData();

    var table = document.getElementById('body');
    
    var myDate = new Date(data.createdDate);
    var day=myDate.getDate();
    var month=myDate.getMonth()+1;
    var year =myDate.getFullYear();
    // insert the data to the users array
    users.push(data);
    // display the new array in the console
    console.log(users);
    // get the index of the last element to pass it as an arg to styling function
    var i= (users.length)-1;

    table.innerHTML+=`<tr>
                        <td>`+data.id+`</td>
                        <td>`+day+`/`+month+`/`+year+`</td>
                        <td><span class='span'>`+data.status+`</span></td>
                        <td>`+data.lastName+`</td>
                        <td>`+data.firstName+`</td>
                        <td>`+data.userName+`</td>
                        <td>`+data.registrationNumber+`</td>
                        <td>
                             <button type="button" class='btn' onclick='deleteUser(`+i+`)'><i class='fa fa-trash'></i></button>
                        </td>
                        </tr>`;

    // Apply the style to span 
    styling(i,data.status);
}

// Delete the user from Users table and Users array
function deleteUser(i){
        var table = document.getElementById('table');
        var index;
        var id =0
        for(id ; id<table.rows.length ; id++){
            table.rows[id].onclick= function (){
                index = this.rowIndex;
                table.deleteRow(index);
                //delete the user from users array
                delete users[i];
                // display the new array in the console
                console.log(users);
            }
        }
}

// Style the status span
function styling(i,status){
    span = document.querySelectorAll('span')[i];
    if(status =='Validé'){
        span.classList.add('valide');
    }else if(status =='En validation'){
        span.classList.add('on-validation');
    }else if(status =='Rejeté'){
        span.classList.add('rejected');
    }
}

// Display the modal 
function displayModal(){
    var modal = document.getElementById('addModal');
    var container = document.getElementById('container');
    container.style.filter='blur(2px)';
    modal.style.display='block';

}

// Hide the modal
function hideModal(){
    var modal = document.getElementById('addModal');
    var container = document.getElementById('container');
    container.style.filter='none';
    modal.style.display='none';
}