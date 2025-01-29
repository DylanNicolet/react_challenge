import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterSlice';

export default function CounterIncreaseButton() {
    const dispatch = useDispatch();

    return (
        <button className='CounterIncreaseButton card-style-primary' onClick={() => dispatch(increment())}>+</button>
    )
}