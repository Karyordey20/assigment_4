const a  = 1; const b = 2; const c = 3; const d = 4; const e = 5
const f = 6; const g = 7; const h = 8; const i = 9; const j = 10

// 1. function that takes students scores and logs

function student(score = 0){
    if(score >= 180){
        console.log("Passed")
    }else{console.log("Failed")}
}
student(30)
student(200)

// // 2. function that accepts age

function studentAge(age){
    if(age >=  18){
        console.log("You're eligible to vote ")
    }else{console.log("Not eligible")}
}
studentAge(12)
studentAge(19)

// //3. function that takes name

function gradeStudent (name, score) {
    if(score >= 90){
        console.log(`${name}`,"excellent" )
    }else if (score >= 75) {
        console.log(`${name}`,"Good" )
    }else if (score >= 50) {
        console.log(`${name}`,"Average" )
    }else{console.log(`${name}`,"Fail" )}
}
gradeStudent("Abayomi", 20)

// function gradeStudent (name, score) {
//     if(score >= 90){
//         return "excellence"
//     }else if (score >= 75) {
//         return "Good"
//     }else if (score >= 50) {
//         return "Average"
//     }else{return "Fail"}
// }
// console.log(gradeStudent("Abayomi", 20))




// //4. functions that takes two booleans

 function toBooleans(hasID, isAbove){
    if(hasID && isAbove){
        console.log("access granted")
    }
 }
 toBooleans(true,true)

//  //5. for loop

const studentScore = [23,50,35,78]
for(let i = 0; i < studentScore.length; i++) {
    const goThrouhg = studentScore[i]
    if(goThrouhg >= 50){
        //console.log("passed")
    }else {
        //console.log("fail")
    }
}

// //6. arow function

const arrowFxn = ()=>{
    const Math = 50
    const English = 50
    const scores = Math && English
    if(scores >= 50){
        console.log("yes ")
    }else{console.log("no")}
   
}
arrowFxn()

//7

const arrowFunc = (email, phoneNumber)=>{
    if(!email || !phoneNumber){
        console.log("email or phonenumber required")
    }else{console.log({email, phoneNumber})}
}
arrowFunc("adegbite@gmail.com", "+234678876")

// //8

const userFxn = (userName, password) =>{
    if(!userName || !password){
        console.log("Invalid input")
    }else{console.log(`welcome ${userName}`)}
}
userFxn("mightyMan", "mighty")

// //9

let hourWorked = 30
 hourWorked >= 40 ? console.log("Full time"): console.log("Part time")

 //10

 const twoNumber = (Number1, Number2)=>{
        if(Number1 > Number2 ){
            return "Number 2 is bigger"
        }else {return "Number 1 is small"}
 }
 console.log(twoNumber(4,3))