import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';
const OrderdList = ()=> {
const [orders , setOrders] = useState([]);
const [currentPage , setCuurentPage] = useState(1);
// for now i am taking 10 
const [orderPerPage , setOrderPerPage] = useState(10);

useEffect(()=>{
    axios.get('http://localhost:3001/api/orders')
    .then(res =>{setOrders(res.data); console.log("Data aya",res.data)})
    .catch(err => console.log("Getting error in get order api", err));
    
},[]);
// logic for indexing and pagination
 
const indexOFLastOrder = currentPage * orderPerPage;
const indexOFFirstOrder = indexOFLastOrder - orderPerPage;
const currentOrrder = orders.slice(indexOFFirstOrder, indexOFLastOrder);


const pagination = (pageNumber) => setCuurentPage(pageNumber);

// edit and delete data
const deleteData =(e)=>{
    console.log("ID aya :- ", e.order_Id);

}


  return (
    <div>
        <table  className='ordertable'>
            <thead>
                <th>Order Id</th>
                <th>product Name</th>
                <th>Qty</th>
                <th>Shipping Type</th>
                <th>Total Amount</th>
                <th>Customer Name</th>
                <th>Dob</th>
                <th>Phone</th>
                <th>Action Edit/ </th>
                <th> Delete</th>
            </thead>
            <tbody>
               {
                currentOrrder.map((order)=>(
                    // console.log("order", order.order_Id)

                     <tr key ={order.order_Id}>
                            <td>{order.order_Id}</td>
                            <td>{order.product_Name}</td>
                            <td>{order.qty}</td>
                            <td>{order.shipping_Type}</td>
                            <td>{order.total_Amount}</td>
                            <td>{order.customer_Name}</td>
                            <td>{order.dob}</td>
                            <td>{order.phone}</td>
                            <td><a >Edit</a></td>
                            <td><button onClick={()=>{
                                    axios.delete(`http://localhost:3001/api/order/${order.order_Id}`,)
                                    .then(res =>{console.log("Data delete Sucessfull", res )
                                    })
                                    .catch(err => console.log("getting errro in post", err));
                            }}>Delete</button></td>
                    </tr>
                ))
               }
                
            </tbody>
        </table>
        <Pagination orderPerPage ={orderPerPage} totalOrder ={orders.length} paginate ={pagination}/>
    </div>
  );
}

export default OrderdList;
