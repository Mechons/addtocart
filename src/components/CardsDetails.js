import React from 'react'
import Table from 'react-bootstrap/Table';
import './Style.css'

export const CardsDetails = () => {
  return (
   <>
   <div className="container mt-2">

   <h2 className="text-center">Iteams Details</h2>
<section className='container mt-3'>
    <div className="iteamsdetails">
     <div className="items_img">
         <img src="https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg" alt="" srcset="" />
     </div>
<div className="details">
<Table>
    <tr>
        <td>
            <p><strong>Restraunt</strong> : Masala Theory</p>
            <p><strong>Price</strong> : $ 300</p>
            <p><strong>Dishes</strong> : Masala Theory</p>
            <p><strong>Total</strong> : $ 300</p>
        </td>
        <td>
        <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> 3.5  ★	</span></p>
                    <p><strong>Order Review :</strong> <span >	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
        </td>
    </tr>
</Table>
</div>
    </div>
</section>

   </div>
   </>
  )
}

export default CardsDetails;
