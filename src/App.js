import React, { useState } from "react";
import "./App.css";
import Accordion from "./Components/Accordion";
import data from "./data";

function App() {
    const [questions, setQuestions] = useState(data);

    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className="info">
                    {questions.map((question) => {
                        return <Accordion key={question.id} {...question} />;
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;
