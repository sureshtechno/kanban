import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
//   const custom = {
//     id: `id-${k}`,
//     content: `Quote ${k}`
//   };

//   return custom;
// });

const initial1 = [
    { id: 'id-10', content: 'Quote 10' },
    { id: 'id-11', content: 'Quote 11' },
    { id: 'id-12', content: 'Quote 12' },
    { id: 'id-13', content: 'Quote 13' },
    { id: 'id-14', content: 'Quote 14' },
    { id: 'id-15', content: 'Quote 15' },
    { id: 'id-16', content: 'Quote 16' },
    { id: 'id-17', content: 'Quote 17' },
    { id: 'id-18', content: 'Quote 18' },
    { id: 'id-19', content: 'Quote 19' },
]
const initial2 = [
    { id: 'id-20', content: 'Quote 20' },
    { id: 'id-21', content: 'Quote 21' },
    { id: 'id-22', content: 'Quote 22' },
    { id: 'id-23', content: 'Quote 23' },
    { id: 'id-24', content: 'Quote 24' },
    { id: 'id-25', content: 'Quote 25' },
    { id: 'id-26', content: 'Quote 26' },
    { id: 'id-27', content: 'Quote 27' },
    { id: 'id-28', content: 'Quote 28' },
    { id: 'id-29', content: 'Quote 29' },
]

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function Quote({ quote, index }) {
    return (
        <Draggable draggableId={quote.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {quote.content}
                </div>
            )}
        </Draggable>
    );
}

const QuoteList = React.memo(function QuoteList({ quotes }) {
    return quotes.map((quote, index) => (
        <Quote quote={quote} index={index} key={quote.id} />
    ));
});

export default function Test() {
    const [state, setState] = useState({ quotes: initial1 });
    const [state2, setState2] = useState({ quotes: initial2 });

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const quotes = reorder(
            state.quotes,
            result.source.index,
            result.destination.index
        );

        setState({ quotes });
    }
    function onDragEnd2(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const quotes = reorder(
            state2.quotes,
            result.source.index,
            result.destination.index
        );

        setState2({ quotes });
    }

    return (
        <div style={{ display: 'flex' }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <QuoteList quotes={state.quotes} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <DragDropContext onDragEnd={onDragEnd2}>
                <Droppable droppableId="list">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <QuoteList quotes={state2.quotes} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
