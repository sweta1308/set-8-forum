import { useContext } from "react"
import { QuestionContext } from "../context/QuestionsContext"
import { Link } from "react-router-dom"

export const Question = () => {
    const {questionData, handleUpVote, handleDownVote} = useContext(QuestionContext)
    return (
        <>
            <h1>Questions</h1>
            {questionData.map((todo) => {
                const {id, question, downVotes, upVotes } = todo
                return (
                <div key={id}>
                    <h2>{question}</h2>
                    <button onClick={() => handleUpVote(todo)}>Upvote {upVotes}</button>
                    <button onClick={() => handleDownVote(todo)}>Downvote {downVotes}</button>
                    <Link to={`/answers/${id}`}>answers</Link>
                </div>
            )})}
        </>
    )
}