//Variables data type -> String, Number, Object, Boolean, Null, Undefined
let votesInterseting = 20;
let votesMindblowing = 5;

const text = "A constant variable cant be changed";

votesInterseting = votesInterseting + 1;
console.log(votesInterseting);

let totalVotes = votesInterseting + votesMindblowing;
console.log("Upvotes:", totalVotes);

let voteFalse = 3;

const isCorrect = votesInterseting < voteFalse;
console.log(isCorrect);


//Functions
function calFactAge(year){
    const currentYear = new Date().getFullYear();
    return currentYear-year;
}

const factAge = calFactAge(2015);
console.log(factAge);

//IF Else statement

if(votesInterseting === votesMindblowing){
    console.log("This fact is interesting and mindblowing");
}else if (votesInterseting > votesMindblowing){
    console.log("This fact was more intersting");
}else{
    console.log("This fact was more mindblowing");
}

//falsy -> 0, null, undefined will return false
//truthy -> otherthan above mentioned values.

if(votesInterseting){
  console.log("This content is getting displayed because of truthy");
}else{
  console.log("This content is getting displayed because of falsy");
}

//Terynary operator

let falseVotes = 10;
let totalUpVotes = 55;

const msg = totalUpVotes > falseVotes ? "Fact is true" : "Fact is false";
console.log(msg);

//String operations

const textStr = "Sample text for test";
console.log(textStr.toUpperCase());

//String literal -> to associate or append a variable value to existing string.
//In string literal we can have function and terinary operator as well.
const bornYear = 2012;
const minorAge = 18;
const ageCalc = `Date of birth is ${bornYear}. Then this individual was
                  ${calFactAge(bornYear)} years old.
                  ${calFactAge(bornYear) > minorAge ? "Individual was major" : "Individual was minor"}`;
console.log(ageCalc);

//Arrow function
const calAgeByArrFunVal = (year) => minorAge < new Date().getFullYear()-bornYear ? "Individual was major" : "Individual was minor";

console.log(calAgeByArrFunVal(bornYear));

//Arrays

const fact = ["AI will create Job Loss", 2023, true];

console.log(fact);
console.log(fact[0]);
console.log(fact[1]);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length-1]);

//Assignd one array to another array
const [factText, year, isTrueFact] = fact;

console.log(text);
console.log(year);
console.log(isTrueFact);

const newFact = [fact, "3 facts are there in old arr"];
console.log(newFact);

//Spreading -> unpacking the array element and creating new array with new value.
const spreadArr = [...fact, "Array values are spread"];
console.log(spreadArr);

//Objects
const factObj = {
    text : "Open AI was introduced on 2023",
    category : "technology",
    isCorrect : true,
    year : 2023,

    summary : function(){
        return `This fact was ${new Date().getFullYear()-year} old. As it was created on ${this.year}`;
    }
}

console.log(factObj);
console.log(factObj.text);
console.log(factObj.category);
console.log(factObj["text"]);
console.log(factObj["category"]);
console.log(factObj.summary());

//Looping over Array forEach
[2,5,6,9].forEach(function(x){
  console.log(x);
});

//To assign array operation output need to use map
const factOf10 = [2,5,6,9].map(function(x){
  return x * 10;
});
console.log(factOf10);

const arrFactOf10 = [2,5,6,9].map((x) => x * 10);
console.log(arrFactOf10);

//Array of Objects Looping

const CATEGORIES = [
    {name: "technology" , color: "#3b82f6"},
    {name: "science" , color: "#16a34a"},
    {name: "finance" , color: "#ef4444"},
    {name: "scociety" , color: "#eab308"},
    {name: "health" , color: "#14b8a6"},
    {name: "history" , color: "#f97316"},
    {name: "news" , color: "#8b5cf6"}
]

CATEGORIES.forEach((x)=>{
    console.log(x.name);
})

const names = CATEGORIES.map((x)=>x.name);
console.log(names);