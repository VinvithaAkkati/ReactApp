import resList from '../Utils/mockData';
import RestaurentCard from './RestaurentCard';
import { useState } from "react";

const Body = () => {

    const [restoData , setRestoData] = useState(resList);

    return (
        <div className='body-container'>
            <div className='filter'>
                <button 
                className='filter-button'
                onClick = {
                   () => {
                    const filtertempData= restoData.filter( data => (data.info.avgRating >= 4));
                    setRestoData(filtertempData);
                    } 
                }
                >Filter</button>
            </div>
            <div className='resto-card-container'>
                { restoData.map( restaurant => (
                    <RestaurentCard key = {restaurant.info.id} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;    