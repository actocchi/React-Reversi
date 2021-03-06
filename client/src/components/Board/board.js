import React from 'react';
import './board.css';
import Square from './square.js';
import {useStoreContext} from '../../utils/GlobalState';

function Board(props) {
    return (
        <div>
            {props.board.map((row,x) => {
                return <div className='row' key={x}>
                    {row.map((piece,y) => {
                        return <Square color={piece} onClick={() => props.onClick(x,y, props.dispatch)} key={y}></Square>
                    })}
                </div>
            })}
        </div>
    );
}
export default Board;