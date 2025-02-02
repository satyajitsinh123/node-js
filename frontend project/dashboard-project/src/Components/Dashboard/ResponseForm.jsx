import { useState, useEffect } from "react";

const ResponseForm = ({ bidId }) => {
    const [response, setResponse] = useState("");
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const bids = JSON.parse(localStorage.getItem("bids"));
        const bid = bids.find(b => b.id === parseInt(bidId));
        if (bid) {
            setResponses(bid.responses || []);
        }
    }, [bidId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newResponse = { text: response, date: new Date().toISOString() };
        setResponses([...responses, newResponse]);

        const bids = JSON.parse(localStorage.getItem("bids"));
        const updatedBids = bids.map(b =>
            b.id === parseInt(bidId) ? { ...b, responses: [...b.responses, newResponse] } : b
        );

        localStorage.setItem("bids", JSON.stringify(updatedBids));
        setResponse("");
    };

    return (
        <div className="container">
            <h2>Respond to Bid {bidId}</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Enter your response"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    required
                />
                <button type="submit">Submit Response</button>
            </form>

            <h3>Previous Responses</h3>
            <ul>
                {responses.map((res, index) => (
                    <li key={index}>{res.text} - {new Date(res.date).toLocaleString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResponseForm;
