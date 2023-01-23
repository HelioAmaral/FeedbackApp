import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats(){

    const {feedback} = useContext(FeedbackContext);

    //calculate ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length;

    //we reassign the average variable to have 1 decimal number
    //replace(/[.,]0$/,''); says if the decimal number is 0 replace it by nothing (9.0 = 9)
    average = average.toFixed(1).replace(/[.,]0$/,'');

    return(
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;