import React, {useState, useEffect} from 'react'
import './Menu.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

function MenuOrder() {

    const [items, setItems] = useState([]);
    const [cartItem, setCartItem] = useState([])

    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    const handleAddToCart = (item) => {
        setCartItem([...cartItem, item])
    }

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItem.filter((item, i) => i !== index);
        setCartItem(updatedCartItems);
      };

    useEffect(() => {
        const fetchItems = async () => {
          const menuCollection = collection(db, 'Menu-items');
          let q;
    
          // Filter the items based on the active button
          switch (activeButton) {
            case 'recommends':
              q = query(menuCollection, where('type', '==', 'recommend'));
              break;
            case 'specials':
              q = query(menuCollection, where('type', '==', 'specials'));
              break;
            case 'bestSeller':
              q = query(menuCollection, where('type', '==', 'bestseller'));
              break;
            default:
              q = menuCollection;
          }
    
          const snapshot = await getDocs(q);
          const menuData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setItems(menuData);
        };
        fetchItems();
      }, [activeButton]);



    return (
    <div className='menuContainer'>
        <div className='subContainer'>
            <div className='menu'>
            <div className="nav">
                <div className="filter">
                    <button
                    className={activeButton === 'all' ? 'active' : ''}
                    onClick={() => handleButtonClick('all')}
                    >
                    All
                    </button>
                </div>
                <div className="filter">
                    <button
                    className={activeButton === 'recommends' ? 'active' : ''}
                    onClick={() => handleButtonClick('recommends')}
                    >
                    Recommends
                    </button>
                </div>
                <div className="filter">
                    <button
                    className={activeButton === 'specials' ? 'active' : ''}
                    onClick={() => handleButtonClick('specials')}
                    >
                    Specials
                    </button>
                </div>
                <div className="filter">
                    <button
                    className={activeButton === 'bestSeller' ? 'active' : ''}
                    onClick={() => handleButtonClick('bestSeller')}
                    >
                    Best Seller
                    </button>
                </div>
            </div>
                <div className='items'>
                    {items.map(item => (
                    <div className='card' key={item.id}>
                        <div className='foodImg'>
                            <img src={item.img} alt={item.title}/>
                        </div>
                        <div className='head'>
                            <h3 className='name'>{item.title}</h3>
                            <h3 className='price'>{item.price}</h3>
                        </div>
                        <div>
                        <p className='description'>{item.description}</p>
                        </div>
                        <button className='addToCart' onClick={() => handleAddToCart(item)}>Order Now</button>
                    </div>
                    ))}
                </div>
            </div>
            <div className='cart'>
                <div className='cartTitle'>
                    <h2>Your Cart</h2>
                </div>
                <div className='cartItems'>
                    <div className='items-box'>
                        {cartItem.map((item, index) => (
                        <div className='itemContainer' key={index}>
                            <div className='removeBtn'>
                                <button className='remove' onClick={() => handleRemoveItem(index)}>X</button>
                            </div>
                            <div className='addedItem'>
                                <img src={item.img} alt={item.title}/>
                                <p className='itemName'>{item.title}</p>
                                <div className='qtyBtns'>
                                    <button className='add'>+</button>
                                    <p>1</p>
                                    <button className='del'>-</button>
                                </div>
                                <h3 className='price'>{item.price}</h3>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='divider'></div>
                <div className='taxes'>
                    <div className='deliveryTax'>
                        <p>Delivery Charge:</p>
                        <p>$1</p>
                    </div>
                    <div className='restTax'>
                        <p>Taxes:</p>
                        <p>$1</p>
                    </div>
                    <div className='total'>
                        <p>Total Amount:</p>
                        <p>$15</p>
                    </div>
                </div>
                <div className='payBtn'>
                    <button className='confirmBtn'>Make Payment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuOrder