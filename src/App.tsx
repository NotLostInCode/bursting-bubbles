import React, {useEffect, useState} from 'react';
import styles from './styles/App.module.css'


export const App = () => {

    const [count, setCount] = useState(0)
    const [life, setLife] = useState(5)
    const [start, setStart] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [play, setPlay] = useState('Start')
    const [background, setBackground] = useState(true)
    const [startTimer, setStartTimer] = useState(false)



    const onClickStartHandler = () => {
        setStart(true)
    }

    useEffect(() => {
        let countdownInterval: any;

        if (start) {
            countdownInterval = setInterval(() => {
                setCountdown(countdown => countdown - 1)
            }, 1500)
        }
        if (countdown === 0) {
            clearInterval(countdownInterval)
            setPlay('The game has begun!');
            setTimeout(() => {
                setStartTimer(true)
                setPlay('')
                setStart(false)
                setBackground(false)

            }, 1500)
        }

        return () => {
            clearInterval(countdownInterval)
        }
    }, [start, countdown]);


    const playGame = () => {

    }

    return (
        <div className={styles.app}>

            <div className={styles.containerBubble}>

                <div className={styles.menuBubble}>
                    <div className={styles.lifes}>lifes {life}</div>
                    <div className={styles.timer}><Timer
                        startTimer={startTimer}
                    /></div>
                    <div className={styles.count}>Count {count}</div>
                </div>

                <div className={styles.burstingBubbles}>
                    <div className={background ? styles.playGame : ''}>
                        <button onClick={onClickStartHandler} className={styles.start}>
                            {start ? countdown : play}
                        </button>
                    </div>
                    <Bubble setCount={setCount}
                            count={count}/>
                </div>
            </div>

        </div>
    );
}


//========================Timer========================
export type PropsTimerType = {
    startTimer: boolean
}
export const Timer: React.FC<PropsTimerType> = ({startTimer}) => {

    const [seconds, setSeconds] = useState(20)
    const [milliseconds, setMilliseconds] = useState(0);


    useEffect(() => {
        let timer: any
        // if (startTimer) {
            timer = setInterval(() => {
                if (seconds === 0 && milliseconds === 0) {
                    clearInterval(timer);
                } else if (milliseconds === 0) {
                    if (seconds > 0) {
                        setSeconds(seconds => seconds - 1)
                    }
                    setMilliseconds(9);
                } else {
                    if (milliseconds > 0) {
                        setMilliseconds(milliseconds => milliseconds - 1)
                    }
                }
            }, 100);
        // }

        return () => {
            clearInterval(timer);
        };
    }, [seconds, milliseconds, startTimer]);

    return (
        <div>{seconds < 10 ? `0${seconds}` : seconds}:{milliseconds < 10 ? `0${milliseconds}` : milliseconds}</div>
    )
}

//========================Timer========================


//========================Bubble========================
type PropsType = {
    setCount: (count: number) => void
    count: number
}

export const Bubble: React.FC<PropsType> = ({setCount, count}) => {

    const getRandomPosition = (maxWidth: number, maxHeight: number) => {
        const x = Math.random() * (maxWidth - 50)
        const y = Math.random() * (maxHeight - 50)
        return {x, y}
    }

    const [position, setPosition] = useState(getRandomPosition(950, 700))

    const onClickRandomBubbleHandler = () => {
        setPosition(getRandomPosition(950, 700))
        setCount(count + 1)
    }
    const {x, y} = position;


    return (
        <div style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
        }} onClick={onClickRandomBubbleHandler} className={styles.bubble}>
        </div>
    )
}
//========================Bubble========================


// ------Old trash, but suddenly useful-------


// useEffect(() => {
//     const timer = setInterval(() => {
//         if (seconds === 0 ) {
//             clearInterval(timer)
//         } else if (milliseconds === 0) {
//             setMilliseconds(9)
//         } else {
//             setSeconds(seconds => seconds - 1)
//             setMilliseconds(milliseconds => milliseconds - 1)
//         }
//     }, 100)
//     // if (start) {
//     //
//     // }
//     return () => {
//         clearInterval(timer)
//     }
//
//
// }, [seconds, milliseconds]);


// import React, {useEffect, useState} from 'react';
// import styles from './styles/App.module.css'
//
// export const App = () => {
//   const getRandomPosition = (maxWidth:number, maxHeight:number) => {
//     const x = Math.random() * (maxWidth - 50)
//     const y = Math.random() * (maxHeight - 50)
//     return {x, y}
//   }
//   // @ts-ignore
//   const [position, setPosition] = useState(getRandomPosition(950, 700))
//   const [count, setCount] = useState(0)
//   const [round, setRound] = useState(1)
//   const [life, setLife] = useState(5)
//
//
//
//   useEffect(() => {
//     setPosition(getRandomPosition(950, 700))
//   }, []);
//
//   const { x, y } = position;
//
//   const onClickRandomBubbleHandler = () => {
//     setPosition(getRandomPosition(950, 700))
//     setCount(count => count + 1)
//     if ((count + 1) % 10 === 0) {
//       setRound(round => round + 1)
//     }
//   }
//
//   const onClickRepeatHandler = () => {
//     setCount(0)
//   }
//
//   return (
//     <div className={styles.app}>
//
//       <div className={styles.containerBubble}>
//         <div className={styles.round}>Round {round}</div>
//           <div className={styles.burstingBubbles}>
//             <div style={{position: "absolute",
//               left: `${x}px`,
//               top: `${y}px`,}} onClick={onClickRandomBubbleHandler} className={styles.bubble}></div>
//           </div>
//         <div className={styles.panel}>
//           <div className={styles.count}>Count {count}</div>
//           <div className={styles.lifes}>lifes {life}</div>
//           <div onClick={onClickRepeatHandler} className={styles.repeat}>Repeat</div>
//         </div>
//       </div>
//
//     </div>
//   );
// }
//
