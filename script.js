const age = +prompt('age')
if (age < 30) {
    alert('вы младше 30');
}
if (age > 30 && age < 60) {
    alert('вы старше 30');
}
if (age > 60) {
    alert('вы старше 60');
}


const yearOfBirth = +prompt ('Введите год рождения')
const currentYear = (2024)

if (yearOfBirth > currentYear) {
    alert('Вы еще не родились')
    
}