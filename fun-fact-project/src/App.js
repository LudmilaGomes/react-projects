import React from "react";
import Header from './components/Header'
import MainContent from './components/MainContent';
import MyInfo from './components/MyInfo';
import Footer from './components/Footer'
import Oclock from "./components/Oclock";
import CounterButton from "./components/CounterButton";
import List from "./components/List"
import './style.css';
import CatsListItem from "./components/CatsListItem";
import CatsList from "./components/CatsList";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App()
{
    const MyJokes = jokesData.map(joke => {
        return(
            <div>
                <Joke 
                    key={joke.id}
                    number={joke.id}
                    question={joke.question}
                    answer={joke.answer}
                />
                <hr></hr>
            </div>
        )
    })

    return (

        // tests
        <div>
            {MyJokes}
        </div>

        // <div>
        //     <CatsList></CatsList>
        // </div>

        // <div>
        //     <Header />
        //     <MainContent />
        //     <MyInfo />
        //     <Oclock />
        //     <CounterButton />
        //     <Footer />
        // </div>

        // to-do list
        // <div className="todo-list">
        //     <h2>This is my ToDo List!</h2>
        //     <List />
        //     <List />
        //     <List />
        //     <List />
        // </div>
    );
}

export default App;