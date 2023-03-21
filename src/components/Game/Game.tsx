import * as React from "react";
import "./Game.scss";
import { useEffect, useState } from "react";

const maxEnemies = 100;
const gameSize = 400;
const defaultOdds = 0;

interface EnemyProps {
    health: number;
    positionX: number;
    positionY: number;
    sizeX: number;
    sizeY: number;
}

const getRandXPos = () => Math.round(Math.random() * 39) * 10;

const Enemy = ({ props }: { props: EnemyProps }) => {
    return (
        <span
            className={"enemy"}
            style={
                {
                    top:    (props.positionY + 'px'),
                    left:   (props.positionX + 'px'),
                    width:  (props.sizeX + 'px'),
                    height: (props.sizeY + 'px'),
                }
            }/>
    );
};

const makeNewEnemy = () => {
    return {
        health:    100,
        positionY: 0,
        positionX: getRandXPos(),
        sizeX:     10,
        sizeY:     10,
    };
};


const Game = () => {

    const [ enemies, setEnemies ] = useState<EnemyProps[]>([]);
    const [ addEnemyOdds, setAddEnemyOdds ] = useState(defaultOdds);
    const [ enemiesPerRow, setEnemiesPerRow ] = useState(1);
    const [ spawnEnemyOdds, setSpawnEnemyOdds ] = useState(1);
    const [ increaseSpawnBy, setIncreaseSpawnBy ] = useState(0.01);
    const [ increaseOddsBy, setIncreaseOddsBy ] = useState(0.01);

    const onAddEnemy = () => {
        setEnemiesPerRow(enemiesPerRow + 1);
        if (increaseSpawnBy < 1) {
            setIncreaseSpawnBy(increaseSpawnBy + 0.01);
        }
        if (increaseOddsBy > 0.0001) {
            setIncreaseOddsBy(increaseOddsBy - 0.0001);
        }
        setSpawnEnemyOdds(defaultOdds);
    };

    const makeNewEnemies = () => {

        if (Math.random() < spawnEnemyOdds) {
            setSpawnEnemyOdds(defaultOdds);
            if (Math.random() < addEnemyOdds) {
                onAddEnemy();
            } else {
                setAddEnemyOdds(+(addEnemyOdds + increaseOddsBy).toFixed(2));
            }
            return Array(enemiesPerRow)
                .fill("")
                .map(makeNewEnemy);
        }
        setSpawnEnemyOdds(+(spawnEnemyOdds + increaseSpawnBy).toFixed(2));
        return [];

    };

    const updateEnemies = () => {

        const oldEnemies = structuredClone(enemies);
        const filteredEnemies = oldEnemies.filter(props => (props.positionY + props.sizeX < gameSize));
        filteredEnemies.forEach(prop => prop.positionY += 10);

        if (filteredEnemies.length < maxEnemies) {
            const newEnemies = makeNewEnemies();
            const newState = [ ...filteredEnemies, ...newEnemies ];
            setEnemies(newState);
        } else {
            setEnemies(filteredEnemies);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateEnemies();
        }, 100);

        return () => clearInterval(interval);
    });

    return (
        <div className={"game-container"}>
            <p>Enemies Per Row: { enemiesPerRow }</p>
            <p>Enemy Addition Odds: { addEnemyOdds }</p>
            <p>Enemy Spawn Odds: { spawnEnemyOdds }</p>
            <p>Increase Odds: { increaseOddsBy }</p>
            {
                enemies.map((props, ind) => (
                    <Enemy props={props} key={`enemy-${ ind }`}></Enemy>
                ))
            }
        </div>
    );
};

export default Game;
