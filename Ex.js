let number;
if (number) {
console.log(number)
} else {
console.log('false') 
}

let person = {
    firstName:"John",
    lastName:"Doe",
    age:50
    };
    person = null;
    console.log(person); 
    console.log(typeof(person));

function SumFirstandLastEl(el) {
    let firstEl=+(el[0]);
    let lastEl=+(el[el.lenght - 1]);
    let sum=firstEl + lastEl;
    console.log(sum);
    console.log(typeof sum);
    }
SumFirstandLastEl(['20','30','50']);
    
function DaysofWeek(n) {
    const days = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
        "Sunday" 
    ]
    if (n >=1 && n<=7) {
         console.log(days[n - 1]);
    }
    else {
        console.log('Invalid Day!');
    }
}
DaysofWeek(5);