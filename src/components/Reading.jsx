import React from 'react';
import '../styles.css';

const Reading = () => {
    return (
        <>
        <div>
            <section className="search-area">
                <div className="current-box">
                    <div className="loc-title">
                        <h3>Current Location</h3>
                    </div>
                    <div className="loc">
                        <p>Pimpri, Pune 411018</p>
                    </div>
                </div>
                <div className="filter">
                    <div className="filter-box">
                        <div className="state-box">
                            <div className="state-title">
                                <h3>State <i className="bx bx-chevron-down"></i></h3>
                            </div>
                        </div>
                        <div class="state-box">
                    <div class="state-title">
                        <h3>District
                            <i class='bx bx-chevron-down'></i>
                        </h3>
                    </div>
                </div>
                <div class="state-box">
                    <div class="state-title">
                        <h3>Pincode
                            <i class='bx bx-chevron-down'></i>
                        </h3>
                    </div>
                </div>

                        {/* Add District and Pincode similarly */}
                    </div>
                </div>
            </section>
            <section className="reading">
                <div className="img-box">
                    <div className="chart">
                        <img src="/photos/chart.png" alt="Chart" />
                    </div>
                    <div className="area-chart">
                        <img src="/photos/area-chart.png" alt="Area Chart" />
                    </div>
                </div>
            </section>
        </div>

        <section className="alert water-theme">
                <div className="section-title">
                    <h3>Alert History</h3>
                </div>

                <div className="water-card">
                    <table className="water-table">
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Resolved By</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Type 1</td>
                                <td>2023-09-15</td>
                                <td>Pimpri, pune</td>
                                <td>John Doe</td>
                                <td>
                                    <button className="water-button">Download</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Type 2</td>
                                <td>2023-08-18</td>
                                <td>Pimpri, pune</td>
                                <td>Jane Smith</td>
                                <td>
                                    <button className="water-button">Download</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="report water-theme">
                <div className="section-title">
                    <h3>Past Analytics</h3>
                </div>

                <div className="water-card">
                    <div className="report-container">
                        <div className="duration-box">
                            <div className="duration-label">
                                <label htmlFor="duration">Duration:</label>
                            </div>
                            <div className="duration-options">
                                <label>
                                    <input type="radio" name="duration" value="monthly"/> 
                                    Monthly
                                </label>
                                <label>
                                    <input type="radio" name="duration" value="weekly"/> 
                                    Weekly
                                </label>
                                <label>
                                    <input type="radio" name="duration" value="yearly"/> 
                                    Yearly
                                </label>
                            </div>
                        </div>

                        <div className="report-row">
                            <label htmlFor="reportType">Report Type:</label>
                            <select id="reportType" className="water-select">
                                <option value="finance">select</option>
                                <option value="sales">Sales</option>
                                <option value="inventory">Inventory</option>
                            </select>
                        </div>

                        <div className="report-row">
                            <label htmlFor="state">State:</label>
                            <select id="state" className="water-select">
                                <option value="newYork">select</option>
                                <option value="california">California</option>
                                <option value="texas">Texas</option>
                            </select>
                        </div>

                        <div className="report-row">
                            <label htmlFor="district">District:</label>
                            <select id="district" className="water-select">
                                <option value="district1">select</option>
                                <option value="district2">District 2</option>
                                <option value="district3">District 3</option>
                            </select>
                        </div>

                        <div className="download-button">
                            <button className="water-button full-width">Download</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reading;
