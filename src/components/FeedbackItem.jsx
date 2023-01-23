import {FaTimes, FaEdit} from 'react-icons/fa';
import { useContext } from 'react';
import Card from "./shared/Card";
import FeedbackContext from '../context/FeedbackContext';

//this component will show a single feedback item
//the data comes through props ({item})
function FeedbackItem({item}){

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return (
<Card>
    <div className="num-display">{item.rating}</div>
    <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple'/>
    </button>
    <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple'/>
    </button>
    <div className="text-display">{item.text}</div>
</Card>
    )
}

//default props
Card.defaultProps = {
    reverse: false,
}



export default FeedbackItem;