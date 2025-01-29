import { useDispatch } from 'react-redux';
import { decrement } from '../redux/counterSlice';

export default function CounterDecreaseButton() {
    const dispatch = useDispatch();

    return (
        <button className='CounterDecreaseButton card-style-primary' onClick={() => dispatch(decrement())}>-</button>
    )
}