import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {RangeCard, RangeNumber, RangeNumbers} from '../styles/styles';

export default function Range (props: {state: number, setState: any, title: string, min: number, max:number, step:number}) {
    const {state, setState, title, min, max, step} = props;
    const [numbers, setNumbers] = useState([]);
    const dispatch = useDispatch();

    const renderNumbers = () => {
        let array:number[] = [];
        for(let i = min; i <= max; i = i + step){
            array.push(i);
        }
        setNumbers(array);
    }

    useEffect(() => {
        renderNumbers();
    },[]);

    return (
        <RangeCard>
            <h5>{title}</h5>
            <RangeNumbers>
                {numbers.length < 1 && <div>Загрузка...</div>}
                {numbers.map((number, index) => (
                    <RangeNumber key={index}>{number}</RangeNumber>
                ))}
            </RangeNumbers>
            <form className="range">
                <div className="form-group range__slider">
                    <input value={state} onChange={(e) => dispatch(setState(+e.target.value))} type="range" min={min} max={max} step={step} />
                </div>
            </form>
            {/* <input value={state} onChange={(e) => dispatch(setState(+e.target.value))} type="range" min={min} max={max} step={step}/> */}
        </RangeCard>
    );
};