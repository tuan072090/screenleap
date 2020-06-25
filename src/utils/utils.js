
export function switchIndexOfTwoItems(list=[], oldIndex, newIndex) {

    if(!list[oldIndex] || !list[newIndex]){
        return list;
    }

    const oldIndexItem = list[oldIndex];
    const newIndexItem = list[newIndex];
    const result = [];

    list.forEach((item, index) => {
        if(index === oldIndex){
            result.push(newIndexItem);
        }else if(index === newIndex){
            result.push(oldIndexItem);
        }else {
            result.push(item);
        }
    });

    return result;
}


export function isActiveRoute() {

}
