async function lomutoPartition(element, left, right){

    let i = left - 1;
    element[right].style.background = 'red';

    for(let j = left; j <= right - 1; j++){
        element[j].style.background = 'yellow';
        await decidedWait(delay);

        if(parseInt(element[j].style.height) < parseInt(element[right].style.height)){
            i++;
            swap(element[i],element[j]);

            element[i].style.background = 'orange';
            if(i != j){
                element[j].style.background = 'orange';
            }
            await decidedWait(delay);
        }
        else{
            element[j].style.background = 'pink';
        }
    }
    i++;
    await decidedWait(delay);

    swap(element[i],element[right]);

    element[right].style.background = 'pink';
    element[i].style.background = 'green';

    await decidedWait(delay);

    for(let k = 0; k < element.length; k++){
        if(element[k].style.background != 'green'){
            element[k].style.background = 'cyan';
        }
    }
    return i;
}


async function quickSort(element, left, right){
    if(left < right){
        let pivotIndex = await lomutoPartition(element, left, right);
        await quickSort(element, left, pivotIndex - 1);
        await quickSort(element, pivotIndex + 1, right);
    }
    else{
        if(left >= 0 && right >= 0 && left < element.length && right < element.length){
            element[right].style.background = 'green';
            element[left].style.background = 'green';
        }
    }
}

async function quickSortRoot(){
    let element = document.querySelectorAll('.bar');
    let left = 0;
    let right = parseInt(element.length) - 1;
    quickSort(element, left, right);
}

const quickSortBtn =  document.querySelector('.quick_sort');

quickSortBtn.addEventListener('click', async () =>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSortRoot();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})