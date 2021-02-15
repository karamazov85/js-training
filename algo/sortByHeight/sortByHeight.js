function sortByHeight(a) {
    // determine where the trees are
    const treeIndexes = []
    const noTrees = []
    
    for(let i = 0; i < a.length; i++){
        if(a[i] == -1) {
            treeIndexes.push(i)
        } else {
            noTrees.push(a[i])
        }
    }
    
    const sorted = noTrees.sort((a,b) => a - b); 
    
    for (let i = 0; i < treeIndexes.length; i++) {
        sorted.splice(treeIndexes[i], 0, -1);
    }
    
    return sorted
}