 import './Card.css'
 import { Draggable } from 'react-beautiful-dnd';


const Card = (props) => {
    let status = ""

    const nomeStatus = () => {
        if(props.type == 1){
            status = " to do";
        }
        if(props.type == 2){
            status = " doing";
        }
        if(props.type == 3){
            status = " done";
        }
        
    }

    nomeStatus();

    return (

        <Draggable draggableId="card">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="card-container">
                <input type="text" id={`text-${props.id}`} name="text" value={`Card ${props.id}`} /* Adiciona o ID ao valor do input */
                style={{ height: "20px", marginLeft: "5px", borderRadius: "4px", border: "none", color:"gray" }} 
                />
                <button className="card-button">=</button>
                {provided.placeholder}
                </div>
            )}
        </Draggable>

    /*
    div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="card-container"
                >
    <div className="card-content">
    */


      );

}

export default Card;

/*<label for="text">TEXT</label>

          <p>{props.texto}</p>

<h3 style={{justifyContent: "center"}}>{props.title}</h3>


            <input type="text" id="text" name="text" style={{height:"20px", marginLeft:"5px",borderRadius:"4px", border:"none"}}/>*/