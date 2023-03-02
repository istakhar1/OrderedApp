import React from 'react';

const Pagination = ({orderPerPage , totalOrder , paginate })=>{

    const pageNumber =[];

    for(let i =1;i<=Math.ceil(totalOrder/orderPerPage);i++){
        pageNumber.push(i);
    }
    return (
        <div>
            <ul>
                {
                    pageNumber.map(number =>{
                        <li key ={number}>
                            <a onClick={()=> paginate(number) } href ='!#'>
                                {number}
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>

    );

}

export default Pagination;