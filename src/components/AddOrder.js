import React ,{useState} from "react";
import axios from "axios";

const AddOrder =({onAdd})=>{
    const [productName,setProductName] = useState('');
    const [qty,setQty] = useState('');
    const [shippingType,setShippingType] = useState('');
    const [totalAmount,setTotalAmount] = useState('');
    const [customerName,setCustomerName] = useState('');
    const [dob,setDob] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit =(e)=>{
        const newOrder ={
            "product_Name": productName,
            "qty": qty,
            "shipping_Type": shippingType,
            "total_Amount": totalAmount,
            "customer_Name": customerName,
            "dob": dob,
            "phone": phone
        }

        axios.post('http://localhost:3001/api/orders', newOrder)
        .then(res =>{
            onAdd(res.data);
            setProductName('');
            setQty('');
            setShippingType('');
            setTotalAmount('');
            setCustomerName('');
            setDob('');
            setPhone('');
        })
        .catch(err => console.log("getting errro in post", err));


    }
    

    
      
        return (
            <form onSubmit={onSubmit}>
                <div>
                <label>Product Name</label>
                <input type={'text'} value ={productName} onChange={(e)=> setProductName(e.target.value)}/>
                </div>
                <div>
                <label>Quentity</label>
                <input type={'text'} value ={qty} onChange={(e)=> setQty(e.target.value)}/></div>
                <div>
                <label>Shipping Type</label>
                <input type={'text'} value ={shippingType} onChange={(e)=> setShippingType(e.target.value)}/></div>
                <div>
                <label>Total Amount</label>
                <input type={'text'} value ={totalAmount} onChange={(e)=> setTotalAmount(e.target.value)}/></div>
                <div>
                <label>Customer Name</label>
                <input type={'text'} value ={customerName} onChange={(e)=> setCustomerName(e.target.value)}/></div>
                <div>
                <label>Date Of Birth</label>
                <input type={'text'} value ={dob} onChange={(e)=> setDob(e.target.value)}/></div>
                <div>
                <label>Phone number</label>
                <input type={'text'} value ={phone} onChange={(e)=> setPhone(e.target.value)}/></div>
                <div>
                <button type="submit">Submit Order</button>
                <button >Cancel</button>
                </div>
            </form>
        )

}

export default AddOrder