import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

export const QuestionContext = createContext();

export const QuestionProvider = ({children}) => {
    const [questionData, setQuestionData] = useState([])

    const getData = async () => {
        try {
            const response = await fakeFetch('https://example.com/api/questions')
            if (response.status === 200) setQuestionData(response.data.questions)
        } catch (response) {
            console.log(response.message)
        }
    }

    const handleUpVote = (todo) => {
        // const findIt = questionData.find(ques => ques.id === todo.id)
        // const updateVote = questionData.map((question) => {
        //     if(question.id === id) {
        //         return {
        //             ...question,
        //             upVotes: question.upVotes + 1
        //         }
        //     } else {
        //         return question
        //     }
        // })
        // setQuestionData(updateVote)
    }

    const handleDownVote = (todo) => {
        // const updateDownVote = questionData.map((question) => {
        //     if(question.id === id) {
        //         return {
        //             ...question,
        //             downVotes: question.downVotes - 1
        //         }
        //     } else {
        //         return question
        //     }
        // })
        // setQuestionData(updateDownVote)
    }

    
    useEffect(() => {getData()}, [])
    return (
        <QuestionContext.Provider value={{questionData, handleUpVote, handleDownVote}}>
            {children}
        </QuestionContext.Provider>
    )
}