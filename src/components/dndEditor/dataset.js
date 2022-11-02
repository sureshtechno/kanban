const dataset = {
    tasks: {
        "task-1": { id: "task-1", content: "Suresh Babu", des: "Java" },
        "task-2": { id: "task-2", content: "Shankar R", des: "Front End" },
        "task-3": { id: "task-3", content: "Ramesh", des: "Back-End" },
        "task-4": { id: "task-4", content: "Divya", des: "App Dev" }
    },
    columns: {
        "column-1": { id: "column-1", title: "Open - 11", taskIds: ['task-1'] },
        "column-2": { id: "column-2", title: "Contacted - 10", taskIds: ['task-2', 'task-3'] },
        "column-3": { id: "column-3", title: "Written Test - 10", taskIds: [] },
        "column-4": { id: "column-4", title: "Technical Round - 20", taskIds: ["task-4"] }
    },
    columnOrder: ["column-1", "column-2", "column-3", "column-4"]
}

export default dataset
