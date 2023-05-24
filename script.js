function register(){
    username=userName.value;
    userid=userId.value;
    password=Password.value;

    let userDetails={
        username,
        userid,
        password,
    }   
    if(userid in localStorage){
        alert('User Account already exist')
    } 
    else{
        alert('Registered Successfully')
        localStorage.setItem(userid,(JSON.stringify(userDetails)));
        window.location.href='index.html';
        
    }
}



function login(){
    userid=uId.value;
    upassword=uPassword.value;
    
    if(userid in localStorage){
        userData=JSON.parse(localStorage.getItem(userid))
        dispName=userData.username
        if(upassword==userData.password){
            
            alert('Login Successful');
            window.location.href='home.html';

        }
        else{
            alert('invalid password')
        }
    }
    else{
        alert('invalid User ID')
    }
}


function addIncome(){
    
    income=incomeName.value;
    incomeAmount=incomeAmt.value;
    if(income==""){
        alert('please enter the income type')
    }
    else if(incomeAmount==0){
        alert('please enter the income amount')
    }
    
    else{
    tableData=` 
     <tr >
        <td>${income}</td>
        <td>${incomeAmount}</td>
        
     </tr>`
        document.getElementById('incomeRow').innerHTML+=tableData;
        
        addBalance()
        incomeName.value='';
        incomeAmt.value='';
    }
        
    
  
}

document.getElementById("balanceScreen").value=0;
var balanceAMT = parseInt(document.getElementById("balanceScreen").value);

function addBalance(){
    incomeAMT = parseInt(document.getElementById("incomeAmt").value )
    
     
    balance=(balanceAMT+=incomeAMT )
    if(balance==0){
        alert("please enter the value")
    }
    else{
    document.getElementById("balanceScreen").value = balance;
    }
}

// expense 
function subBalance(){
    expAMT = parseInt(document.getElementById("expenseAmt").value )
    balance=parseInt(balanceAMT-=expAMT )
    document.getElementById("balanceScreen").value = balance;


}
function addExpense(){
    expense=expenseName.value;
    expenseAmount=expenseAmt.value;
    if(expense==""){
        alert('Please enter the expense title');
    }
    else if(expenseAmount==0){
        alert('Please enter the expense amount');
    }
    else{
    tabledata=` 
     <tr >
        <td>${expense}</td>
        <td>${expenseAmount}</td>
        
    </tr>`
        document.getElementById('expenseRow').innerHTML+=tabledata;
        subBalance();
        expenseName.value='';
        expenseAmt.value='';

    }

        
}

// clear all from table 

function clearAll(){
    incomeRow.innerHTML="";
    expenseRow.innerHTML="";
    balanceScreen.value=0;
    expenseName.value="";
    expenseAmt.value="";
    incomeName.value="";
    incomeAmt.value="";

}


// logout 
localStorage.getItem('userid')
function logout(){
    // document.getElementById('homeModal').style.display='block'
    // alert('Logged out')
    confirm('Are you sure you want to log out')

    localStorage.removeItem('userid');
    window.location.href='index.html';
    // window.location='./index.html';

}