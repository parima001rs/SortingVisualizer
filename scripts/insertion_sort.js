async function insertionSort(){
    const element = document.querySelectorAll(".bar");

    element[0].style.background = 'green';
    for(let i = 0; i < element.length; i++){
        let j = i - 1;
        let key = element[i].style.height;
        element[i].style.background = 'blue';
        await decidedWait(delay);

        while(j>=0 && (parseInt(element[j].style.height) > parseInt(key))){
            element[j].style.background = 'blue';
            element[j+1].style.height = element[j].style.height;
            j--;

            await decidedWait(delay);

            for(let k = i; k >= 0; k--){
                element[k].style.background = 'green';
            }
        }
        element[j+1].style.height = key;
        element[i].style.background = 'green'
    }
}

const insertionSortBtn =  document.querySelector('.insertion_sort');

insertionSortBtn.addEventListener('click', async () =>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})