import React, { useState } from 'react';
import './Column.css'
import Card from '../Card/Card.js'
import { Droppable } from 'react-beautiful-dnd';


const Column = (props) => {
    
    const [cards, setCards] = useState([]);
    const[idCounter, setIdCounter] = useState(0);
    

    const addCard = () => {
        const newCardId = idCounter + 1;
         setCards([...cards, <Card key={newCardId} id={newCardId} type={props.type}/>]);
         setIdCounter(newCardId);
    };

    return(
        
        <Droppable droppableId={props.laneId} {...props}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="column"
        >
            <h3>{props.title}</h3>
          {cards.map((card) => card)}
          <button className='botaoAdd' onClick={addCard}><strong> add </strong></button>    

          {provided.placeholder}
        </div>
      )}
    </Droppable>




    );

}

export default Column;