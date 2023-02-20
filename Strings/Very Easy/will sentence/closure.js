function outer() {

    let abc = "chocloate";

    function inner(num) {

        return abc ;
    }

    return inner; 
}
const x = outer();

