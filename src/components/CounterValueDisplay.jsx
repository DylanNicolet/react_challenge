/**
 * Props: 
 * `counterValue` represents the current value of the counter to be displayed.
 */
export default function CounterValueDisplay(props) {
    return (
        <section className='CounterValueDisplay card-style-primary'>
            <p>{props.counterValue}</p>
        </section>
    )
}