//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".facts-list");

//Creating DOM Elements: Render facts List
/*
const initialFacts = [
    {
        id : 1,
        text: "The first AI program to run in the United States also was a checkers program, written in 1952 by Arthur Samuel for the prototype of the IBM 701.",
        source: "https://www.britannica.com/technology/artificial-intelligence/Alan-Turing-and-the-beginning-of-AI",
        category: "technology",
        votesInterseting: 24,
        votesMindblowing: 9,
        voteFalse: 2,
        createdIn: 2021
    },
    {
        id : 2,
        text: "For years it was believed that Earth was the only planet in our solar system with liquid water. More recently, NASA revealed its strongest evidence yet that there is intermittent running water on Mars,too!.",
        source: "https://science.nasa.gov/mars/facts/",
        category: "technology",
        votesInterseting: 20,
        votesMindblowing: 17,
        voteFalse: 1,
        createdIn: 2018
    },
    {
        id : 3,
        text: "There are over 8000+ sports played around the world! Despite this, there were only 33 sports played at the Olympics 2021.",
        source: "https://www.pixstory.com/story/did-you-know-that-the-longest-cricket-match-in-history-lasted-14-days-it-was-played-between-england/232104",
        category: "sports",
        votesInterseting: 35,
        votesMindblowing: 22,
        voteFalse: 0,
        createdIn: 2014
    }
]
//createFactsList(initialFacts);
*/

const CATEGORIES = [
    {name: "technology" , color: "#3b82f6"},
    {name: "science" , color: "#16a34a"},
    {name: "finance" , color: "#ef4444"},
    {name: "scociety" , color: "#eab308"},
    {name: "health" , color: "#14b8a6"},
    {name: "history" , color: "#f97316"},
    {name: "sports" , color: "#8b5cf6"}
];

factList.innerHTML = "";

function createFactsList(dataArr){

    const htmlArr = dataArr.map((fact)=> `<li class="fact">
                     <p>
                        ${fact.fact}
                        <a class="source"
                            href=${fact.source}
                            target="_blank">(Source)</a>

                    </p>
                    <span class="tag" style="background-color: ${CATEGORIES.find((cat)=> cat.name === fact.category).color}">${fact.category}</span>
</li>`);
const html = htmlArr.join("");
factList.insertAdjacentHTML("afterbegin", html);
};


loadFacts();

async function loadFacts(){

    const resp = await fetch("https://lxgudonoyyetwytdpxhe.supabase.co/rest/v1/facts?select=*", {
    headers : {
        apikey : "<apikey>",
        authorization : "Bearer <token>",
    },
});
const data = await resp.json();
console.log(data);
createFactsList(data);
}

//Toggle Visibility
//EventHandler
btn.addEventListener('click', function(){
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        btn.textContent="Close";
    }else{
        form.classList.add("hidden");
        btn.textContent="Share A Fact";
    }
}) 

//console.dir(btn);
