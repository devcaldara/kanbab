import Column from '../Column/Column';
import './Board.css'
import { DragDropContext } from 'react-beautiful-dnd';


const Board = () => {

    function handleOnDragEnd(result){
        
    }

    return(

        <DragDropContext onDragEnd={handleOnDragEnd} className="board">
            <Column key= "1" title="To Do" type= "1"/>
            <Column key= "2" title="Doing" type= "2"/>
            <Column key= "3" title="Done"  type= "3"/>
        </DragDropContext>

    );

}

export default Board;