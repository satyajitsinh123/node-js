import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext); // Get user info from context
    const [bids, setBids] = useState([]); // State to store bids data
    const [searchQuery, setSearchQuery] = useState(""); // State for search functionality

    // Check if the user is logged in and load bids from localStorage
    useEffect(() => {
        const storedBids = JSON.parse(localStorage.getItem("bids"));
        if (storedBids) {
            setBids(storedBids);
        } else {
            const initialBids = [
                { id: 1, number: "#123456", from: "Gurgaon", to: "Mumbai", weight: "4000 Kg", responses: 4, assigned: "Mohit" },
                { id: 2, number: "#654321", from: "Delhi", to: "Pune", weight: "5000 Kg", responses: 2, assigned: "Rahul" }
            ];
            localStorage.setItem("bids", JSON.stringify(initialBids));
            setBids(initialBids);
        }
    }, []);

    // Filter bids based on the search query
    const filteredBids = bids.filter((bid) =>
        bid.number.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!user) {
        // If the user is not logged in, show a loading or login message
        return <div>Loading or Please log in...</div>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>LOGO</h2>
                <ul>
                    <li className="active">Bid</li>
                    <li>POD</li>
                    <li>Vendor</li>
                    <li>User</li>
                </ul>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h2>Welcome, {user?.email || "Guest"}</h2>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search Bids..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <h3>Live Bids</h3>
                <table className="bids-table">
                    <thead>
                        <tr>
                            <th>Bid Number</th>
                            <th>From City</th>
                            <th>To City</th>
                            <th>Material Weight</th>
                            <th>Responses</th>
                            <th>Assigned Staff</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBids.length > 0 ? (
                            filteredBids.map((bid) => (
                                <tr key={bid.id}>
                                    <td>{bid.number}</td>
                                    <td>{bid.from}</td>
                                    <td>{bid.to}</td>
                                    <td>{bid.weight}</td>
                                    <td>{bid.responses}</td>
                                    <td>{bid.assigned}</td>
                                    <td>
                                        <Link className="details-link" to={`/bid/${bid.id}`}>
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No bids found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Dashboard;
