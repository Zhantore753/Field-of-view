import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {RootState} from '../redux/store';
import {EndGame, GameWrap} from '../styles/styles';
import Image from 'next/image'

const Game = () => {
    interface selectedWordType {
        id: number;
        word: string;
    }
    const router = useRouter();
    const selectedWords = useSelector((state: RootState) => state.main.selectedWords);
    const startDistance = useSelector((state: RootState) => state.main.startDistance);
    const distanceIncrease = useSelector((state: RootState) => state.main.distanceIncrease);
    const speed = useSelector((state: RootState) => state.main.speed);
    const [selectedWord, setSelectedWord] = useState <selectedWordType>({id: 0, word: ''});
    const [endGame, setEndGame] = useState(false);

    // Константа множителя дистанции
    const distanceFactor = 7;

    const timer = () => {
        const next = +selectedWord.id + 1;
        setSelectedWord({id:next, word:selectedWords[selectedWord.id]});
    }

    useEffect(() => {
        const separator:any = document.querySelector('.separator'); 
        if(selectedWords.length > 0 && selectedWords.length > selectedWord.id){
            if(selectedWord.id === 0){
                timer();
            }else{
                setTimeout(() => {
                    timer();
                }, speed * 1000);
            }
        }
        if(selectedWords.length <= selectedWord.id){
            setTimeout(() => {
                setEndGame(true);
                setTimeout(() => {
                    router.push('/');
                }, 4000);
            }, speed * 1000);
        }

        separator.style.marginRight = startDistance * distanceFactor + 'px';
        separator.style.marginLeft = startDistance * distanceFactor + 'px';

        if(separator){
            let start = Date.now(); // запомнить время начала
    
            let animationTimer = setInterval(function() {
                let timePassed = Date.now() - start;
    
                if (timePassed >= speed * 1000) {
                    clearInterval(animationTimer); 
                    return;
                }
    
                draw(timePassed);
            }, distanceIncrease / (speed * 1000));
            
            const draw = timePassed => {
                const change = distanceIncrease / (speed * 1000) * timePassed * distanceFactor;
                separator.style.marginRight = startDistance * distanceFactor + change + 'px';
                separator.style.marginLeft = startDistance * distanceFactor + change + 'px';
            }
        }

    }, [selectedWords, selectedWord]);

    return (
        <GameWrap>
            {endGame ? 
                <EndGame>
                    <Image
                        loading="eager"
                        priority={true}
                        src="/endGame.png"
                        alt="Picture of the author"
                        width={464}
                        height={532}
                    />
                    <p>Отличная работа!</p>
                </EndGame>
            :
            <>
                <p>{selectedWord.word.slice(0, Math.ceil(selectedWord.word.length / 2))}</p>
                <span className="separator">~</span>
                <p>{selectedWord.word.slice(Math.ceil(selectedWord.word.length / 2))}</p>
            </>
        }
        </GameWrap>
    );
};

export default withRouter(Game);