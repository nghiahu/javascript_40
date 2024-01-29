class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const form = document.getElementById('personalInfo');
const savedInfo = document.getElementById('savedInfo');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const email = event.target.email.value;
    const person = new Person(name, age, email);
    localStorage.setItem('person', JSON.stringify(person));
    displayInfo(person);
});
const savedPerson = JSON.parse(localStorage.getItem('person'));
if (savedPerson) {
    displayInfo(savedPerson);
}
function displayInfo(person) {
    savedInfo.innerHTML = `Name: ${person.name}<br>Age: ${person.age}<br>Email: ${person.email}`;
}



