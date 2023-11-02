import React, {useEffect, useState} from 'react';
import styles from './styles/App.module.css'


export const App = () => {

    const [count, setCount] = useState(0)
    const [life, setLife] = useState(5)
    const [start, setStart] = useState(false)
    const [countdown, setCountdown] = useState(3)

    const onClickStartHandler = () => {
        setStart(true)

    }

    useEffect(() => {
        if(start && countdown !== 0) {
            const countdownInterval = setInterval(() => {
                setCountdown(countdown => countdown - 1)
            }, 1500)
        }



    }, [start, count]);



    return (
        <div className={styles.app}>

            <div className={styles.containerBubble}>

                <div className={styles.menuBubble}>
                    <div className={styles.lifes}>lifes {life}</div>
                    <div className={styles.timer}>Timer</div>
                    <div className={styles.count}>Count {count}</div>
                </div>

                <div className={styles.burstingBubbles}>
                   <div className={start ? ''  : styles.playGame}>
                            <button onClick={onClickStartHandler} className={styles.start}>
                                {start ?  countdown : 'Start'}</button>
                        </div>
                    <Bubble setCount={setCount}
                            count={count}/>
                </div>
            </div>

        </div>
    );
}


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


// -----------
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
