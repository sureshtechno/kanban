import React, { useState } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import '../../views/jobs.css'
import { Rating } from 'react-simple-star-rating'
import { FiMoreVertical } from "react-icons/fi";

const Container = styled.div`
    background-color:${props => (props.isDragging ? '#e0ffe0' : 'white')};
`
function Task(props) {

    const [ratingValue] = useState(0)



    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >

                    <div className="card mb-3 bg-light">
                        <div className="card-body card-custom">
                            <h6>{props.task.content}</h6>
                            <p>{props.task.content}</p>
                        </div>
                        <div className="star-rating">
                            <div className="d-flex justify-content-between">
                                <div className="ratings">
                                    <Rating readonly={ratingValue > 3} />
                                </div>
                                <div className="more-menu">
                                    <span className="px-2 c-pointer" data-toggle="tooltip" data-placement="top" title="More"><FiMoreVertical /></span>
                                </div>
                            </div>

                        </div>
                    </div>


                </Container>
            )}
        </Draggable>
    )
}

export default Task
