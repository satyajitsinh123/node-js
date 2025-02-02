import { useParams } from "react-router-dom";
import ResponseForm from "./ResponseForm";

const BidDetails = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <h2>Bid Details</h2>
            <p>Bid ID: {id}</p>
            <ResponseForm bidId={id} />
        </div>
    );
};

export default BidDetails;
