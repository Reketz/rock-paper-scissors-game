import { useState } from 'react';
import ResultPage from './ResultPage';

const ResultGame = {
    VICTORY: 1,
    DEFEAT: -1,
    DRAW: 0
}

const ChooseType = [
    "ROCK",
    "PAPER",
    "SCISSORS"
]

const ChooseTypeIndex = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2
}

export function Button({ name, handleClick }) {
    return (
        <button style={{ fontSize: "22px", margin: "12px" }} onClick={handleClick}>{name}</button>
    )
}

export default function GamePage() {
    const [state, setState] = useState({
        playerDecision: undefined,
        playerScore: 0,
        computerDecision: undefined,
        computerScore: 0
    })

    const [showResult, setShowResult] = useState(false);

    function play(decision) {
        
        const playerDecision = ChooseType[decision];
        const computerDecision = ChooseType[Math.floor(Math.random() * ChooseType.length)]

        const result = calculateResult(playerDecision, computerDecision);

        if (ResultGame.DRAW === result) {
            setState(previewState => ({
                ...previewState,
                playerDecision,
                computerDecision
            }));
        } else if (ResultGame.VICTORY === result) {
            setState(previewState => ({
                ...previewState,
                playerDecision,
                computerDecision,
                playerScore: previewState.playerScore + 1
            }));
        } else if (ResultGame.DEFEAT === result) {
            setState(previewState => ({
                ...previewState,
                playerDecision,
                computerDecision,
                computerScore: previewState.computerScore + 1
            }));
        }

        setShowResult(true);
    }

    function calculateResult(playerDecision, computerDecision) {
        if (playerDecision === computerDecision) {
            return ResultGame.DRAW;
        }

        if ((playerDecision === "ROCK" && computerDecision === "SCISSORS") ||
            (playerDecision === "SCISSORS" && computerDecision === "PAPER") ||
            (playerDecision === "PAPER" && computerDecision === "ROCK")
        ) {
            return ResultGame.VICTORY;
        }

        return ResultGame.DEFEAT;
    }

    function backToGame() {
        setShowResult(false);
    }

    if(showResult) {
        return <ResultPage result={state} backToGame={backToGame} />
    }

    return (
        <div className="App">
            <Button name={"Pedra"} handleClick={() => play(ChooseTypeIndex.ROCK)} />
            <Button name={"Papel"} handleClick={() => play(ChooseTypeIndex.PAPER)} />
            <Button name={"Tesoura"} handleClick={() => play(ChooseTypeIndex.SCISSORS)} />
        </div>
    );
}