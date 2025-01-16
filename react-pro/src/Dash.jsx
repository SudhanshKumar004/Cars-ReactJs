import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dash.css'; 

const Dashboard = () => {
    const [cars, setCars] = useState([]);
    const [formv,setFormv] = useState(false);
    const [editdata,setEditdata] = useState({});

    const delcar = (id) => {
        axios.delete(`http://localhost:3000/Cars/${id}`)
            .then(response => {
                alert("Booking Cancelled successfully!");
            })
          
    };

    const vinput = (a) =>{
        const {name, value} = a.target;
        setEditdata({...editdata,
        [name]:value}); 
    }

    const putdata = () =>{
        axios.put(`http://localhost:3000/Cars/${editdata.id}`, editdata) 
        .then(res=>{
            alert("Details Updated!")
        })
    }
    useEffect(() => {
        axios.get('http://localhost:3000/Cars')
            .then(r => {
              console.log(r.data);
              
                setCars(r.data);
            })
    }, []);

    return (
        <>
              <div className='body4'>
            <div className="dashcontainer">
                <h2>Car Bookings</h2>
                {cars.length > 0 ? (
                    <table className="cartable">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Delivery Date</th>
                                <th>Address</th>
                                <th>Advance Pay</th>
                                <th>Model</th>
                                <th>Phone Number</th>
                                <th>Cancel Booking</th>
                                <th>Update Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((c, index) => (
                                <tr key={index}>
                                    <td>{c.name}</td>
                                    <td>{c.deliveryDate}</td>
                                    <td>{c.address}</td>
                                    <td>{c.advance} Rs</td>
                                    <td>{c.model}</td>
                                    <td>{c.number}</td>
                                    <td><button className='delbtn' onClick={() => delcar(c.id)}>Cancel</button></td>
                                    <td><button className='delbtn' onClick={() =>{setFormv(true),setEditdata(c)}}>Update</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="nobookings">No bookings available.</p>
                )}
            </div>
        </div>   
       {formv && (
    <div className={`form-container ${formv ? 'open' : ''}`}>
        <form onSubmit={putdata}>
            <label htmlFor="id">ID:</label>
            <input type="text" name="id" value={editdata.id} onChange={vinput} readOnly />

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={editdata.name} onChange={vinput} />
            
            <label htmlFor="deliveryDate">Delivery Date:</label>
            <input type="date" name="deliveryDate" value={editdata.deliveryDate} onChange={vinput} />

            <label htmlFor="address">Address:</label>
            <input type="text" name="address" value={editdata.address} onChange={vinput} />

            <label htmlFor="advance">Advance Pay:</label>
            <input type="text" name="advance" value={editdata.advance} onChange={vinput} />

            <label htmlFor="model">Model:</label>
            <input type="text" name="model" value={editdata.model} onChange={vinput} />

            <label htmlFor="number">Phone Number:</label>
            <input type="tel" name="number" value={editdata.number} onChange={vinput} />

            <input type="submit" />
        </form>
    </div>
)}

        </>
 );
};

export default Dashboard;
