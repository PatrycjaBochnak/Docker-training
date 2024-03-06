import React from 'react';
import './sass/main.scss';
import {Header} from "./components/Header";
import {NewItemForm} from "./components/NewItemForm";
import {Product} from "./models/Product";
import {ItemsList} from "./components/ItemsList";
import {useLocalStorage} from "./hooks/useLocalStorage";


function App() {

    const [items, setItems] = useLocalStorage('itemsList', []);

    const addProduct = (product: Product) => {
        setItems([...items, product]);
    }

    const toggleBought = (id: string) =>{
        const updatedItems = items.map( (item: Product) => {
            if(item.id === id){
                item.bought = !item.bought;
            }
            return item;
        })
        setItems(updatedItems);
    }

    const clearList = () => {
        setItems([]);
    }


    return (
        <div className="App">
            <Header/>
            <NewItemForm addProductFn={addProduct}/>
            <ItemsList items={items} toggleBoughtFn={toggleBought} clearListFn={clearList}/>
        </div>
    );
}

export default App;
