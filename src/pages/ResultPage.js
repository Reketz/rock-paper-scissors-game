import { Button } from "./GamePage";

export default function ResultPage({ result, backToGame }) {

    const style = {
        fontSize: "24px"
    };

    return (
        <div className="App">
            <ul style={style}>
                <li>Você escolheu: {result.playerDecision}</li>
                <li>Maquina escolheu: {result.computerDecision}</li>
                <li>Seus pontos: {result.playerScore}</li>
                <li>Pontos da máquina: {result.computerScore}</li>
            </ul>

            <Button name={"Voltar"} handleClick={backToGame}  />
        </div>
    );
}