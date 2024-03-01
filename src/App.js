import { useState } from "react";
import "./style.css"

function App() {
  {/* State varibale to control form display */}
  const [showForm, setShowForm] = useState(false);

  
  return (
       <>
        
        <Header showForm={showForm} setShowForm={setShowForm} />

        {/* User state variable */}
        {showForm ? <NewFactForm /> : null}

      <main className="main">
            <CategoryFilter />
            <FactList />
      </main>
    </>
  );
}

function Header({showForm, setShowForm}){
  const appTitle = "This is a Fact application!!!";

  return <header className="header">
            <div className="logo">
                <img src="facts-img.jpg" height="68" width="68" />
                <h1>{appTitle}</h1>
            </div>
            <button className="btn btn-large btn-open" onClick={() => setShowForm((show)=> !show)}>{!showForm ? 'Close' : 'Share A Fact'}</button>
        </header>;
}

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
];

const CATEGORIES = [
    {name: "technology" , color: "#3b82f6"},
    {name: "science" , color: "#16a34a"},
    {name: "finance" , color: "#ef4444"},
    {name: "scociety" , color: "#eab308"},
    {name: "health" , color: "#14b8a6"},
    {name: "history" , color: "#f97316"},
    {name: "sports" , color: "#8b5cf6"}
];


function NewFactForm() {
  return <form className="fact-form">New Fact Form</form>;
}

function CategoryFilter () {
  return <aside>
            <ul>
                 <li className="category"><button className=" btn btn-all-categories">All</button></li>
            </ul>
            <ul>
               {CATEGORIES.map((cat) => (
                    <li key={cat.name} className="category"><button className="btn btn-category" style={{backgroundColor: cat.color}}>
                            {cat.name}</button></li>
               ))}
            </ul>
          </aside>;
}

function FactList() {
  const facts = initialFacts;
  return <section><ul className="facts-list">{
    facts.map((fact)=> (
      <Fact key={fact.id} fact = {fact} />
    ))
  }</ul></section>;
}

function Fact({fact}) {
  return <li  className="fact">
                    <p>
                        {fact.text}
                        <a className="source"
                            href={fact.source}
                            target="_blank">(Source)</a>

                    </p>
                    <span className="tag" style={{backgroundColor: CATEGORIES.find((cat)=> cat.name === fact.category).color,}}>{fact.category}</span>
                    <div className="vote-buttons">
                        
                        <button>👍 {fact.votesInterseting}</button>
                        <button>😽 {fact.votesMindblowing}</button>
                        <button>⛔️ {fact.voteFalse}</button>
                    </div>
                </li>;
}
export default App;
