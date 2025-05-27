import React, { useState } from 'react';
import './CustomerSearch.css';
import { useNavigate } from 'react-router-dom';


const CustomerSearch = () => {
    const [cif, setCif] = useState('');
    const [sin, setSin] = useState('');
    const [dob, setDob] = useState('');
    const [results, setResults] = useState([]);


    const Navigate = useNavigate();
    const handleSearch = () => {
        // Simulate fetching search results
        const fetchedResults = [
            { name: 'John N. Doe', sin: '545-767-531', cif: '245-767-535', dob: 'May 20, 2000' },
            { name: 'New Member', sin: '', cif: '', dob: '' }
        ];
        setResults(fetchedResults);
    };
    const handleSelect = () => {Navigate('/applicantdetails')};



    return (
        <div className="customer-search-container">
            <h1>Customer Search</h1>
            <p>Please search by CIF # or SIN & Date of Birth.</p>
            <div className="search-inputs">
                <input
                    type="text"
                    value={cif}
                    onChange={e => setCif(e.target.value)}
                    placeholder="CIF #"
                />
                <input
                    type="date"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
                <input
                    type="text"
                    value={sin}
                    onChange={e => setSin(e.target.value)}
                    placeholder="SIN"
                />
                <input
                    type="date"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <h2>Search results</h2>
            <table className="results-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SIN</th>
                        <th>CIF #</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index}>
                            <td>{result.name}</td>
                            <td>{result.sin}</td>
                            <td>{result.cif}</td>
                            <td>{result.dob}</td>
                            <td>
                                <button onClick={handleSelect}>Select</button>
                                <button>Add</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default CustomerSearch;