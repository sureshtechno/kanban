import React, { useEffect, useState } from "react";
import './jobs.css';
import '../App.css'
import { FiBriefcase, FiList, FiFilter, FiUpload, FiMoreVertical } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Rating } from 'react-simple-star-rating'
import { GetPost } from "../Api/Api";

const Jobs = () => {

    const [ratingValue, setRatingValue] = useState(0)
    const [state, setState] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    useEffect(() => {
        let x = 0
        setRatingValue(x)
        apicall()
    }, [])

    const apicall = async () => {

        await GetPost().then((res) => {
            let r = res.data.results.map((item, index) =>
                ({ id: { name: 'CPF', value: 'id-' + index }, name: item?.name?.first, des: 'Developer' })
            )
            let r1 = res.data.results.map((item, index) =>
                ({ id: { name: 'CPF', value: 'id1-' + index }, name: item?.name?.first, des: 'Designer' })
            )
            setState({ quotes: r.concat(r1) });
        })
        await GetPost().then((res) => {
            let r = res.data.results.map((item, index) =>
                ({ id: { name: 'CPF', value: 'id2-' + index }, name: item?.name?.first, des: 'Developer' })
            )
            let r1 = res.data.results.map((item, index) =>
                ({ id: { name: 'CPF', value: 'id21-' + index }, name: item?.name?.first, des: 'Engineer' })
            )
            setData2({ quotes: r.concat(r1) });
        })
        await GetPost().then((res) => {
            let r = res.data.results.map((item, index) =>
                ({ id: { name: 'CPF', value: 'id3-' + index }, name: item?.name?.first, des: 'Tester' })
            )
            setData3({ quotes: r });
        })
        await GetPost().then((res) => {
            let r = res.data.results.map((item, index) =>
                ({ id: { name: 'CPF', value: 'id4-' + index }, name: item?.name?.first, des: 'Tester' })
            )
            setData4({ quotes: r });
        })

    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    function Quote({ quote, index }) {
        return (
            <Draggable draggableId={quote.id.value} index={index}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >

                        <div className="card mb-3 bg-light">
                            <div className="card-body card-custom">
                                <h6>{quote.name}</h6>
                                <p>{quote.des}</p>
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
                    </div>
                )}
            </Draggable>
        );
    }

    const QuoteList = React.memo(function QuoteList({ quotes }) {
        if (quotes)
            return quotes.map((quote, index) => (
                <Quote quote={quote} index={index} key={quote.id.value} />
            ));

    });

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
    function onDragEndd2(result) {
        onDragEnd(result);
    }
    function onDragEndd3(result) {
        onDragEnd(result);
    }
    function onDragEndd4(result) {
        onDragEnd(result);
    }

    return (
        <>
            <div className="main-section breadcrumb-area mt-90 py-2">
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

            <div className="main-section filter-area mt-3 px-2">
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

            <div className="main-section mt-3 px-3">
                <div className="row">

                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="card card-border-primary">
                            <div className="card-header open">
                                <h5 className="card-title">Open - 11</h5>
                            </div>
                            <div className="card-body py-3 px-0">

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

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="card card-border-primary">
                            <div className="card-header open">
                                <h5 className="card-title">Contacted - 10</h5>
                            </div>
                            <div className="card-body py-3 px-0">

                                <DragDropContext onDragEnd={onDragEndd2}>
                                    <Droppable droppableId="list">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                <QuoteList quotes={data2.quotes} />
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="card card-border-primary">
                            <div className="card-header open">
                                <h5 className="card-title">Written Test - 10</h5>
                            </div>
                            <div className="card-body py-3 px-0">

                                <DragDropContext onDragEnd={onDragEndd3}>
                                    <Droppable droppableId="list">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                <QuoteList quotes={data3.quotes} />
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="card card-border-primary">
                            <div className="card-header open">
                                <h5 className="card-title">Technical Round - 20</h5>
                            </div>
                            <div className="card-body py-3 px-0">

                                <DragDropContext onDragEnd={onDragEndd4}>
                                    <Droppable droppableId="list">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                <QuoteList quotes={data4.quotes} />
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )

}

export default Jobs;
