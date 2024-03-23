import { db } from "./firebase";
import {collection, addDoc} from 'firebase/firestore'
// import React from 'react'

const collectionRef = collection(db,'Menu-items');

const menuItems = [
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.themediterraneandish.com%2Fcaprese-salad%2F&psig=AOvVaw0UiNAvyR7vL7uYvpBt-vT7&ust=1711203630499000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD_o7aIiIUDFQAAAAAdAAAAABAU',
      title: 'Italian Caprese Salad',
      description: 'Fresh tomatoes, creamy mozzarella cheese, and basil leaves drizzled with balsamic glaze.',
      price: '$9.99',
      type: 'recommend'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fclassic-margherita%2Frs56868564.cms&psig=AOvVaw1FZ4MnJmTiaV9lyfJWvgdZ&ust=1711203862819000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCmkqWJiIUDFQAAAAAdAAAAABAE',
      title: 'Classic Margherita Pizza',
      description: 'Traditional pizza topped with San Marzano tomatoes, fresh mozzarella, basil, and a hint of olive oil.',
      price: '$12.99',
      type: 'recommend'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Ffood-network-kitchen%2Fgrilled-chicken-ceasar-salad-recipe-2118200&psig=AOvVaw1oh8jMLtELprphjW24Cuik&ust=1711203886186000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiHrbCJiIUDFQAAAAAdAAAAABAE',
      title: 'Grilled Chicken Caesar Salad',
      description: 'Crisp romaine lettuce, grilled chicken breast, Parmesan cheese, and homemade Caesar dressing.',
      price: 'S11.99',
      type: 'recommend'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbellyfull.net%2Feasy-spaghetti-carbonara%2F&psig=AOvVaw2ZezEihKlx54moKjHF_FJD&ust=1711203912617000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDI-LyJiIUDFQAAAAAdAAAAABAx',
      title: 'Spaghetti Carbonara',
      description: 'Al dente spaghetti tossed with crispy pancetta, egg yolks, Parmesan cheese, and cracked black pepper.',
      price: '$13.99',
      type: 'recommend'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flmld.org%2Fwestern-bacon-cheeseburgers%2F&psig=AOvVaw2jXc6K1JF7ywo5imVuxZOU&ust=1711203977239000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJis8NuJiIUDFQAAAAAdAAAAABAE',
      title: 'BBQ Bacon Cheeseburger',
      description: 'Juicy beef patty topped with crispy bacon, cheddar cheese, BBQ sauce, lettuce, and tomato on a toasted bun.',
      price: '$14.99',
      type: 'specials'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.budgetbytes.com%2Feasy-vegetable-stir-fry%2F&psig=AOvVaw1GPGDhX44i8M5NbfEqjlz1&ust=1711204001800000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPi2vueJiIUDFQAAAAAdAAAAABAE',
      title: 'Vegetable Stir-Fry',
      description: 'Fresh mixed vegetables sautéed in a savory soy sauce, served over steamed jasmine rice.',
      price: '$10.99',
      type: 'specials'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com%2Fpan-seared-salmon-recipe-5498576&psig=AOvVaw3X9nOgy7A7XPmY2K_Kvldn&ust=1711204028069000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICy_POJiIUDFQAAAAAdAAAAABAE',
      title: 'Pan-Seared Salmon',
      description: 'Fresh salmon fillet pan-seared to perfection, served with roasted vegetables and lemon butter sauce.',
      price: '$16.99',
      type: 'specials'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flindseyeatsla.com%2Fmushroom-risotto%2F&psig=AOvVaw2vEM_EekUF0gUEPdEz_blb&ust=1711204057637000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLC59IGKiIUDFQAAAAAdAAAAABAJ',
      title: 'Mushroom Risotto',
      description: 'Creamy Arborio rice cooked with mushrooms, onions, garlic, and Parmesan cheese.',
      price: '$15.99',
      type: 'specials'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.budgetbytes.com%2Fchicken-alfredo%2F&psig=AOvVaw0EPvqWjVAJHtj-2AR2YEzc&ust=1711204100787000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjS2ZaKiIUDFQAAAAAdAAAAABAE',
      title: 'Chicken Alfredo Pasta',
      description: 'Grilled chicken breast served over fettuccine pasta tossed in a rich and creamy Alfredo sauce.',
      price: '$14.99',
      type: 'best-seller'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbakeplaysmile.com%2Ftiramisu-no-raw-egg-recipe%2F&psig=AOvVaw3iUvOMaI0HM1XZUDUGwnSK&ust=1711204126092000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCi0qKKiIUDFQAAAAAdAAAAABAE',
      title: 'Tiramisu',
      description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
      price: '$7.99',
      type: 'best-seller'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthemodernproper.com%2Fsteak-frites&psig=AOvVaw08CLVtD_s9kcRr7IulnPvL&ust=1711204156934000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODyn7GKiIUDFQAAAAAdAAAAABAY',
      title: 'Steak Frites',
      description: 'Grilled sirloin steak cooked to your preference, served with crispy golden fries and a side of house-made steak sauce.',
      price: '$18.99',
      type: 'best-seller'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dontgobaconmyheart.co.uk%2Froasted-veggie-pesto-pasta%2F&psig=AOvVaw2J5zl9_X8qCddEXLVRRDAu&ust=1711204197650000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjJ6cSKiIUDFQAAAAAdAAAAABAd',
      title: 'Vegetarian Pesto Pasta',
      description: 'Penne pasta tossed with fresh pesto made from basil, pine nuts, garlic, and Parmesan cheese, served with roasted cherry tomatoes and grilled zucchini.',
      price: '$12.99',
      type: 'best-seller'
    }
  ];
  
  export const addMenuItems = async () => {
    try {
      const promises = menuItems.map(async (item) => {
        const docRef = await addDoc(collectionRef, item);
        console.log('Document written with ID: ', docRef.id);
      });
  
      await Promise.all(promises);
      console.log('All menu items added to Firestore.');
    } catch (error) {
      console.error('Error adding documents: ', error);
    }
  };

export default addMenuItems;