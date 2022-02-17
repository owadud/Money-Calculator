// balance

document.getElementById("calculate").addEventListener("click", function () {

    
   
        const totalExpenses = Expenses();

        const income = parseInt(document.getElementById('income').value);
        if (totalExpenses < income) {
            const balance = income - totalExpenses;
            document.getElementById('expense').innerText = totalExpenses;
            document.getElementById('balance').innerText = balance;
        }
        else {
            alert("Expense is Bigger than Income");
        }
   



});

//saving Amount
document.getElementById('save').addEventListener('click', function () {

    const income = parseInt(document.getElementById('income').value);
    
        const savePercent = parseInt(document.getElementById('savePercent').value);
        const savingAmount = parseFloat(income * (savePercent / 100));

        document.getElementById('savingAmount').innerText = savingAmount;

        const totalExpenses = Expenses();

        const remainingAmount = income - (savingAmount + totalExpenses);

        if (remainingAmount >= 0) {
            document.getElementById('remainingAmount').innerText = remainingAmount;
        }
        else {
            alert('Saving is bigger than Balance')
        }
    




})


//calculations for the  expense

function Expenses() {



    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const clothes = document.getElementById('clothes').value;




    const totalExpenses = parseInt(food) + parseInt(rent) + parseInt(clothes);




    // const balance = parseInt(income)-totalExpenses;

    return totalExpenses;
}






