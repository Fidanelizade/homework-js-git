//1.Student adlı obyekt yaradıb name,age, course,faculty adlı sahələr verib hər birini consule çıxardın.
const student = {
    name: "Fidan",
    surname: "Elizade",
    age: 20,
    course: 3,
    faculty: "Tetbiqi riyaziyyat ve kibernetika",
}
console.log(student.name);
console.log(student.surname);
console.log(student.age);
console.log(student.course);
console.log(student.faculty);

//2.Bir obyekt yaradıb başqa dəyişənə obyekt kimi kopyala.
let obj = { "fidan" : 20};
let kopyalaObj = Object.assign({} , obj);
console.log(kopyalaObj);

//3.1-dən 10-dək ədədlərin hərfi yazılışını obyektdən istifadə edərək console çıxradın.
 const obj1 = {
    1: "Bir",
    2: "Iki",
    3: "Uc",
    4: "Dord",
    5: "Bes",
    6: "Alti",
    7: "Yeddi",
    8: "Sekkiz",
    9: "Doqquz",
 }
 for(i =1; i < 10; i++) {
    console.log(obj1[i]);
 }

 //4.Person adlı,sahələri name və surname olan obyektdə getFullName adlı bir funksiya yaradıb name + surname qaytarsın.
 const person = {
    name: "Fidan",
    surname: "Elizade",
    getFullName() {
        return this.name + " " + this.surname;
    },
 };
    console.log(person.getFullName());

    //5.Hər hansı bir obyekt yaradıb onun key və value bir sətrdə çıxardın.
    const obj3 = {
        name: "Fidan",
    }
    const result = Object.entries(obj3);

    console.log(obj3);

    //6.Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.
    function girl(age, fidan) {
        return age.hasOwnProperty(fidan);
      }
      const fidan = {
      age: 20,
      };
      console.log(girl(fidan, "age"));

      //7.Ədədlərdən ibarət obyekt yaradın və bütün value lərin cəmini console çıxardın.
      const numbers = {
        a: 7,
        b: 5,
        c: 11
      };
      let sum = 0;
      for (const key in numbers) {
        if (numbers.hasOwnProperty(key)) {
          sum += numbers[key];
        }
      }
      console.log(sum)
      