import React, { useState } from 'react'
import styled from 'styled-components'
import dataset from './dataset'
import Column from './Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import '../../views/jobs.css'
import { FiBriefcase, FiList, FiFilter, FiUpload } from "react-icons/fi";

const Container = styled.div`
    display : flex;
`

const AppDND = () => {
  const [data, setData] = useState(dataset)

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    //If there is no destination
    if (!destination) { return }

    //If source and destination is the same
    if (destination.droppableId === source.droppableId && destination.index === source.index) { return }

    //If you're dragging columns
    if (type === 'column') {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...data,
        columnOrder: newColumnOrder
      }
      setData(newState)
      return;
    }

    //Anything below this happens if you're dragging tasks
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    //If dropped inside the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      }
      setData(newState)
      return;
    }

    //If dropped in a different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    setData(newState)
  }

  return (
    <div style={{ 'paddingTop': '75px' }} className="main-section">
      <div className="breadcrumb-area mt-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content">
            <div className="">
              <nav>
                <ol className="breadcrumb m-0 py-3 px-2">
                  <li className="breadcrumb-item"><a href="#"><FiBriefcase /> Jobs</a></li>
                  <li className="breadcrumb-item active">Full-stack Engineer</li>
                </ol>
              </nav>
            </div>
            <div className="view-job-button py-2 px-2">
              <button className="btn btn-view-button">View Job Details</button>
            </div>
          </div>
          <div className="d-flex justify-content">
            <select className="minimal ml-2">
              <option>Add Candidate</option>
            </select>
            <select className="classic custom-classsic ml-3">
              <option>Publihsed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="filter-area mt-3 px-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-initial">
            <div className="candidate-filter">
              <span className="strong">All Candidate - </span>
              <span>
                <select className="minimal ml-2 custom-minmal">
                  <option>Add Candidate</option>
                </select>
              </span>
            </div>
            <div className="candidate-filter">
              <span className="strong">Sort By - </span>
              <span>
                <select className="minimal ml-2 custom-minmal">
                  <option>Last Updated</option>
                </select>
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-initial mt-2">
            <span className="px-2 c-pointer" data-toggle="tooltip" data-placement="top" title="Dashboard"><FiList /></span>
            <span className="px-2 c-pointer" data-toggle="tooltip" data-placement="top" title="Dashboard"><FiFilter /></span>
            <span className="px-2 c-pointer" data-toggle="tooltip" data-placement="top" title="Dashboard"><FiUpload /></span>
          </div>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='all-columns' direction='horizontal' type='column'>
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {data.columnOrder.map((id, index) => {
                const column = data.columns[id]
                const tasks = column.taskIds.map(taskId => data.tasks[taskId])

                return <Column key={column.id} column={column} tasks={tasks} index={index} />
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </div>

  )
}

export default AppDND
