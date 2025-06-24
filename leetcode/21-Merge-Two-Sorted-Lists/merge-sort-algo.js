var mergeTwoLists = function(list1, list2) {
    const result = [];
    let list1Index = 0;
    let list2Index = 0;

    while(list1Index < list1.length && list2Index < list2.length) {
        if(list1[list1Index] < list2[list2Index]) {
            result.push(list1[list1Index]);
            list1Index++;
        }else {
            result.push(list2[list2Index]);
            list2Index++;
        }
    }

    return result.concat(...list1.slice(list1Index)).concat(...list2.slice(list2Index));
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));