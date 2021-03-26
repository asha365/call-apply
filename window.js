var name = 'Asha';
function add(num1, num2){
    var result = num1 + num2;
    console.log('name in side:', name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
var sum = add(10, 20);
console.log(sum);
console.log('name outside:', name);