async function merge(element, left, mid, right){
    const n1 = mid - left + 1;
    const n2 = right - mid;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    for(let i = 0; i < n1; i++){
        await decidedWait(delay);
        element[left + i].style.background = 'orange';
        leftArray[i] = element[left + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await decidedWait(delay);
        element[mid + i + 1].style.background = 'yellow';
        rightArray[i] = element[mid + i + 1].style.height;
    }
    await decidedWait(delay);
    let i = 0, j = 0,k = left;
    while(i < n1 && j < n2){
        await decidedWait(delay);

        if(parseInt(leftArray[i]) <= parseInt(rightArray[j])){
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            element[k].style.height = leftArray[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            element[k].style.height = rightArray[j];
            j++;
            k++;
        }
    }

    //now if any elements are left in either of the arrays
    while(i < n1){
        await decidedWait(delay);
        if((n1 + n2) === element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = leftArray[i];
        i++;
        k++;
    }

    while(j < n2){
        await decidedWait(delay);
        if((n1 + n2) === element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = rightArray[j];
        j++;
        k++;
    }
}


async function mergeSort(element, left, right){
    //returning when just 1 element
    if(left >= right){
        return;
    }
    // console.log(`left = ${left} and mid = ${mid} and right = ${right}`);

    //finding the midpoint of left and right
    const mid = left + Math.floor((right - left) / 2);
    

    //recursively calling mergeSort for both halves
    await mergeSort(element, left, mid);
    await mergeSort(element, mid + 1, right);

    //merging the two halves
    await merge(element, left, mid, right);
}


async function mergeSortRoot(){
    let element = document.querySelectorAll('.bar');
    let left = 0;
    let right = parseInt(element.length) - 1;
    // console.log(`at root left = ${left} and right = ${right}`);
    await mergeSort(element, left, right);
}


const mergeSortBtn =  document.querySelector('.merge_sort');

mergeSortBtn.addEventListener('click', async () =>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSortRoot();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})