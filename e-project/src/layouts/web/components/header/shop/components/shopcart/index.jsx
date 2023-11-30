import ExList from '~/assets/ex.svg'
import { removeTocard } from '~/stores/cart/actions';
import { decrementQty, incrementQty } from '~/stores/cart/actions';


function ShopCart({productcard}) {

    const { qty, img, name, price} = productcard;

   
    return(
        <div className="flex items-center justify-between border-b pb-4">
            <div>
               
                <div className='flex flex-col lg:flex-row  gap-2 lg:items-center items-start'>
                    <img src={img} alt="" width={80} height={96}/>
                    <div className='flex flex-col items-start gap-2'>
                        <div className='border rounded-md flex items-center gap-2 p-2 '>
                                <button onClick={() => decrementQty(productcard)}>-</button>
                                <span>{qty}</span>
                                <button onClick={() => incrementQty(productcard)}>+</button>
                        </div>
                        <span className='inline-block text-sm font-medium'>{name}</span>
                    </div>
                </div>
            </div>
            <div className='flex items-end flex-col gap-2'> 
                <span>{price}</span>
                <button onClick={() => removeTocard(productcard)}>
                    <img src={ExList} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ShopCart