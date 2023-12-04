import Joke from "./src/components/Joke";
import jokesData from "./src/jokesData";

const MyJokes = jokesData.map(joke => {
    return(
        <Joke 
            number={joke.id}
            question={joke.question}
            answer={joke.answer}
        />
    );
})

export default MyJokes;