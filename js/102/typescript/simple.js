function greeter(person) {
    return "Hello ".concat(person, ". Your name is ").concat(person.length, " letters long");
}
var trump = 'Donald Trump'; //'Joe Biden'; // 5; //; // 5
document.body.innerHTML = greeter(trump);
var x = 5;
x = 'foo';
var potus = 'Donald Trump';
//potus = 'Joe Biden';
var y;
function greeter2(person) {
    return "Hello ".concat(person.first, " ").concat(person.last);
}
var z = {
    first: 'Joe',
    last: 'Biden'
};
var another = {
    first: 'Kamala',
    last: 'Harris'
};
document.body.innerHTML = greeter2(another);
