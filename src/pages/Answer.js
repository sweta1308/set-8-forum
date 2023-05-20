import { useContext } from "react";
import { useParams } from "react-router"
import { QuestionContext } from "../context/QuestionsContext";

export const Answer = () => {
    const {id} = useParams();
    const {questionData} = useContext(QuestionContext)
    console.log(questionData)
    console.log(id)

   const findAns = questionData.find((data) => data.id.toString() === id)
   console.log(findAns)
    return (
        <>
            <h1>Answer</h1>
            <p>{findAns.answer}</p>
        </>
        
    )
}