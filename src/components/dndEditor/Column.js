import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const Container = styled.div`
    margin: 0.5rem;
    border-radius: 5px;
    width:250px;
    display:flex;
    flex-direction: column;
    background-color:transparent;
`;
const Title = styled.h3`
    padding: 0 1rem;
    margin: 1rem 0; 
`;
const TaskList = styled.div`
    padding: 1rem;
    background-color: ${props => (props.isDraggingOver ? '#d5f3ff' : 'inherit')};
    min-height:100px;
`;

function Column(props) {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <Title {...provided.dragHandleProps}>
                        <div className=''>
                            <div className="card-header open p-2">
                                <h5 className="card-title">{props.column.title}</h5>
                            </div>
                        </div>
                    </Title>
                    <Droppable droppableId={props.column.id} type='task'>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
    )
}

export default Column
