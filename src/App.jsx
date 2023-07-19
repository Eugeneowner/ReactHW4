import {useEffect, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './componets/header/header';
import ModalBasketContainer from './componets/modal/modalBasketContainer';
import ModalWishContainer from './componets/modal/modalWishContainer';
import ListContainer from './componets/list/listContainer';
import WishContainer from './componets/wishPage/wishContainer';
import BasketContainer from './componets/basketPage/basketContainer';

const App = (props) => {
    useEffect(()=>{
        axios.get('/auto.json')
            .then(res=>{
                props.saveAuto(res.data)
            })
    }, [])
    
    
    return (
        <Fragment>
            <BrowserRouter>
                <Header 
                    countBuy = {props.state.countBuy}
                    countWish = {props.state.countWish}
                />

                <main>
                    {props.state.isBuy ?
                    <ModalBasketContainer/>
                    : null}
                    
                    {props.state.isWish ?
                    <ModalWishContainer/>
                    : null}
                    <Routes>
                        <Route 
                            path='/'
                            element = {
                               <ListContainer/>
                            }
                        />
                        <Route path='/wishlist'
                            element = {
                               <WishContainer/>

                            }
                        />
                        <Route path='/basket'
                        element = {
                            <BasketContainer/>
                        }
                        
                        />
                    </Routes>
                    
                </main>
            </BrowserRouter>
        </Fragment>
    )
}
export default App