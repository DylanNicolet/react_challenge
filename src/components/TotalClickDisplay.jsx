/**
 * Props: 
 * `totalClickCount` represents the total number of time the user clicked one of the buttons.
 */
export default function TotalClickDisplay(props) {
    return(
        <p className='TotalClickDisplay card-style-primary'>You clicked {props.totalClickCount} times</p>
    )
}