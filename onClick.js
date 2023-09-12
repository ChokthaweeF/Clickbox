
let currentValue = 0;

function updateNumber() {
    const displayElement = document.getElementById('number');
    displayElement.textContent = currentValue;
}

const addButton = document.getElementById('addButton');
const minusButton = document.getElementById('minusButton');

addButton.addEventListener('click', function () {
    if(currentValue==10){
        currentValue==10;
        updateNumber();
    }
    else{
        currentValue+=1;
        updateNumber();
    }
});

minusButton.addEventListener('click', function () {
    if(currentValue==0){
        currentValue==0;
        updateNumber();
    }
    else{
        currentValue-=1;
        updateNumber();
    }
});