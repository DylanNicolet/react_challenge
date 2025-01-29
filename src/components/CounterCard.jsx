import { useSelector } from 'react-redux'
import TotalClickDisplay from "./TotalClickDisplay"
import CounterDecreaseButton from './CounterDecreaseButton'
import CounterIncreaseButton from './CounterIncreaseButton'
import CounterValueDisplay from './CounterValueDisplay'

// Main counter component
export default function CounterCard() {
    // Redux states
    const totalClickCount = useSelector((state) => state.counter.totalClickCount);
    const counterValue = useSelector((state) => state.counter.counterValue);
    const counterBackgroundHue = useSelector((state) => state.counter.counterBackgroundHue);

    return (
        <section 
            className='CounterCard card-style-primary' 
            style={{ backgroundColor: `hsla(${counterBackgroundHue}, 100%, 50%, 0.3)` }} // Dynamic Hue value to change the background's color
        >
            <TotalClickDisplay totalClickCount={totalClickCount}/>

            <section className='CounterCard__main-section card-style-primary'>
                <CounterDecreaseButton />
                <CounterValueDisplay counterValue={counterValue}/>
                <CounterIncreaseButton />
            </section>
        </section>
    )
}