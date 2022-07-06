//swap function defination (takes two elements and swaps them... used by all algo)
function swap(element1, element2){
    const tempElement = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = tempElement;
}

//Function to enable the sorting buttons
function enableSortingBtn(){
    document.querySelector('.bubble_sort').disabled = false;
    document.querySelector('.insertion_sort').disabled = false;
    document.querySelector('.selection_sort').disabled = false;
    document.querySelector('.merge_sort').disabled = false;
    document.querySelector('.quick_sort').disabled = false;
}

//Function to disable the sorting buttons
function disableSortingBtn(){
    document.querySelector('.bubble_sort').disabled = true;
    document.querySelector('.insertion_sort').disabled = true;
    document.querySelector('.selection_sort').disabled = true;
    document.querySelector('.merge_sort').disabled = true;
    document.querySelector('.quick_sort').disabled = true;
}

//Function to enable array size slider after the sorting process
function enableSizeSlider(){
    document.querySelector('#arr_sz').disabled = false;
}

//Function to disable array size slider during the sorting process
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

//Function to enable generate_array after the sorting process
function enableNewArrayBtn(){
    document.querySelector('.generate_array').disabled = false;
}

//Function to disable generate_array during the sorting process
function disableNewArrayBtn(){
    document.querySelector('.generate_array').disabled = true;
}

//Util function for wait of the animation
function decidedWait(mst){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('');
        },mst);
    })
} 

//Catching the size slider from DOM
let arraySize = document.querySelector('#arr_sz');

//Using the event listener to update the UI
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
})

//default value for decidedWait function (260ms)
let delay = 260;

//Catching the speed slider from the DOM
let delayElement = document.querySelector('#speed_inp');

//Event Listener to update our delay time
delayElement.addEventListener('input', () =>{
    delay = 320 - parseInt(delayElement.value);
})

//The vector(array) to store the randomly generated bars
let array = [];

//Display the bars in initial site visit
createNewArray();

//Function to generate new array
function createNewArray(noOfBars = 60){
    //helper function to delete old bars from DOM
    deleteChild();

    //generating the new random array
    array = [];
    for(let i = 0; i < noOfBars; i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }

    //selecting the display div for bars
    const arrayBars = document.querySelector('#array_bars');

    //creating the bars using div and with class 'bar'
    for(let i = 0; i < noOfBars; i++){
        const bar = document.createElement('div');
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        arrayBars.appendChild(bar);
    }
}
    //Util helper function to delete all previous bars
    function deleteChild(){
        const bar = document.querySelector('#array_bars');
        bar.innerHTML = '';
    }

    //Adding the event listener to the generate array button
    const generateArray = document.querySelector('.generate_array');
    generateArray.addEventListener('click', ()=>{
        enableSortingBtn();
        enableSizeSlider();
        createNewArray(arraySize.value);
    })

