async function selectionSort(){
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length; i++){
        let min_index = i;
        element[i].style.background = 'blue';
        for(let j = i + 1; j < element.length; j++){
            element[j].style.background = 'red';

            await decidedWait(delay);
            if(parseInt(element[j].style.height) < parseInt(element[min_index].style.height)){
                if(min_index !== i){
                    element[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                element[j].style.background = 'cyan';
            }   
        }
        await decidedWait(delay);
        swap(element[min_index], element[i]);
        element[min_index].style.background = 'cyan';
        element[i].style.background = 'green';
    }
}

const selectionSortBtn =  document.querySelector('.selection_sort');

selectionSortBtn.addEventListener('click', async () =>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})