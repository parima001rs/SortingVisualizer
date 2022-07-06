async function bubbleSort(){
    // console.log("Executing bubble Sort");
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length - 1; i++){
        for(let j = 0; j < element.length - i - 1; j++){
            element[j].style.background = 'blue';
            element[j+1].style.background = 'blue';
            if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)){
                await decidedWait(delay);
                swap(element[j],element[j+1]);
            }
            element[j].style.background = 'cyan';
            element[j+1].style.background = 'cyan';
        }
        element[element.length - i - 1].style.background = 'green';
    }
    element[0].style.background = 'green';
}

const bubbleSortBtn =  document.querySelector('.bubble_sort');

bubbleSortBtn.addEventListener('click', async () =>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubbleSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})