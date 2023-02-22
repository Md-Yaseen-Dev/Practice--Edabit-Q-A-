function oddNumbers(l, r) {
    // Write your code here
let oddNum = []
for(let i = l ; i <= r ; i++){
    
    if(i % 2 !== 0){
        
        oddNum .push( i) ;
    }
    
}
    return oddNum
}

console.log(oddNumbers(2,5))