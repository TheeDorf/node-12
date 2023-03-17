let array = [1,3,5,7,3,4,65,75]

array.forEach((value, i )=>{
    console.log("value"+value)
    console.log("index"+ i)
});

var names = ['Andre', 'Karl', 'Rashida', 'Olivia'];

names.forEach((value, i)=> {
    console.log(value)
    console.log(i)
});

var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

zooAnimals.forEach((zooAnimals,i)=>{
    console.log(zooAnimals)
    console.log(i)
});

var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];
students.forEach ((students, i)=>{
    console.log(students)
    console.log(i)
});



// for (let bottlesOnTheWall = 99; bottlesOnTheWall <= 150; bottlesOnTheWall++) {
//     if (bottlesOnTheWall) {
//       console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
//     } else {
//       console.log(`No more bottles of milk on the wall!`);
//     }
//   }

  let arr1 = []
  for(let i = 1; i <= 99; i++){
    arr1.push(i)
  };
  arr1.reverse()
  console.log(arr1);

  arr1.forEach((value)=> console.log(value))



