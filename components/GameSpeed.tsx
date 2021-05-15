import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GameSpeedBtns, GameSpeedHead, RangeCard } from '../styles/styles';

const GameSpeed = (props: {speed: number, setSpeed: any}) => {
    const {speed, setSpeed} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if(speed > 5){
            dispatch(setSpeed(5));
            return;
        }else if(speed < 1){
            dispatch(setSpeed(1));
            return;
        }else{
            dispatch(setSpeed(Math.round(speed*2)/2));
        }
    }, [speed]);
    
    return (
        <RangeCard>
            <GameSpeedHead className="gamespeed-head">
                Скорость <input onChange={(e) => dispatch(setSpeed(+e.target.value))} type="number" value={speed}/> сек.
            </GameSpeedHead>
            <GameSpeedBtns>
                <button onClick={() => dispatch(setSpeed(speed - 0.5))}>-</button>
                <button onClick={() => dispatch(setSpeed(speed + 0.5))}>+</button>
            </GameSpeedBtns>
        </RangeCard>
    );
};

export default GameSpeed;