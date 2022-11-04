import React, { useState, useEffect } from 'react';
import dataset from '../dndEditor/dataset';

// @function  AllContext
const AllContext = React.createContext({ name: '', auth: false });

// @function  AllProvider
// Create function to provide AllContext
const AllProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const [data, setDndDatasetini] = useState([]);

    useEffect(() => {
        datasetFN(dataset)
    }, [])

    useEffect(() => {
        searchDatasetFN(dataset)
    }, [searchText])

    const datasetFN = (text) => {
        setDndDatasetini(text);
    }

    const searchDatasetFN = () => {
        // console.log('searchText ## : ', searchText)

    }
    const search = (text) => {
        setSearchText(text);
    }

    return (
        <AllContext.Provider value={{ searchText, search, data, datasetFN, searchDatasetFN }}>
            {children}
        </AllContext.Provider>
    );
};

export { AllContext, AllProvider }
