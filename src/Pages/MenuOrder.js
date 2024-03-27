import React, {useState, useEffect} from 'react'
import './Menu.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

function MenuOrder() {

    const [items, setItems] = useState([]);
    const [activeButton, setActiveButton] = useState('all');
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
  
    const deliveryCharge = 1;
    const taxRate = 0.1;
  
    const handleButtonClick = (buttonType) => {
      setActiveButton(buttonType);
    };
  
    const handleAddToCart = (item) => {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      setTotalAmount(totalAmount + parseFloat(item.price.slice(1)));
    };
  
    const handleRemoveItems = (index) => {
      const updatedCartItems = cartItems.filter((item, i) => i !== index);
      const removedItem = cartItems[index];
      const updatedTotalAmount = totalAmount - removedItem.quantity * parseFloat(removedItem.price.slice(1));
      setCartItems(updatedCartItems);
      setTotalAmount(updatedTotalAmount);
    };
  
    const handleIncreaseQuantity = (index) => {
      const updatedCartItems = [...cartItems];
      const item = updatedCartItems[index];
      item.quantity += 1;
      const updatedTotalAmount = totalAmount + parseFloat(item.price.slice(1));
      setCartItems(updatedCartItems);
      setTotalAmount(updatedTotalAmount);
    };
  
    const handleDecreaseQuantity = (index) => {
      const updatedCartItems = [...cartItems];
      const item = updatedCartItems[index];
      if (item.quantity > 1) {
        item.quantity -= 1;
        const updatedTotalAmount = totalAmount - parseFloat(item.price.slice(1));
        setCartItems(updatedCartItems);
        setTotalAmount(updatedTotalAmount);
      }
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


    const calculateTotalAmount = () => {
        const itemTotal = totalAmount;
        const taxAmount = itemTotal * taxRate;
        const grandTotal = itemTotal + deliveryCharge + taxAmount;
        return grandTotal.toFixed(2);
    };

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
                        {cartItems.map((item, index) => (
                        <div className='itemContainer' key={index}>
                            <div className='removeBtn'>
                                <button className='remove' onClick={() => handleRemoveItems(index)}>X</button>
                            </div>
                            <div className='addedItem'>
                                <img src={item.img} alt={item.title}/>
                                <p className='itemName'>{item.title}</p>
                                <div className='qtyBtns'>
                                    <button className='add' onClick={() => handleIncreaseQuantity(index)}>+</button>
                                    <p>{item.quantity}</p>
                                    <button className='del' onClick={() => handleDecreaseQuantity(index)}>-</button>
                                </div>
                                <h3 className='price'>{(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}</h3>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='divider'></div>
                <div className='taxes'>
                    <div className='deliveryTax'>
                        <p>Delivery Charge:</p>
                        <p>{deliveryCharge}</p>
                    </div>
                    <div className='restTax'>
                        <p>Taxes:</p>
                        <p>{(totalAmount * taxRate).toFixed(2)}</p>
                    </div>
                    <div className='total'>
                        <p>Total Amount:</p>
                        <p>{calculateTotalAmount()}</p>
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