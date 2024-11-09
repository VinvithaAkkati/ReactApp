import resList from '../Utils/mockData';
import RestaurentCard from './RestaurentCard';
import { useState } from "react";

const Body = () => {

    const [tempData , setTempData] = useState([
        {
            "info": {
                "id": "121603",
                "name": "Kanur Food Point",
                "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
                "cuisines": [
                    "Kerala",
                    "Chinese"
                ],
                "avgRating": 4.2,
                "sla": {
                    "deliveryTime": 54,
                }
            }
        },
        {
            "info": {
                "id": "121604",
                "name": "Kanur Food Point 2",
                "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
                "cuisines": [
                    "Kerala",
                    "Chinese"
                ],
                "avgRating": 3.8,
                "sla": {
                    "deliveryTime": 30,
                }
            }
        }

    ]);
    
    let tempData2 = [
        {
            "info": {
                "id": "121603",
                "name": "Kanur Food Point",
                "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
                "cuisines": [
                    "Kerala",
                    "Chinese"
                ],
                "avgRating": 4.2,
                "sla": {
                    "deliveryTime": 54,
                }
            }
        },
        {
            "info": {
                "id": "121604",
                "name": "Kanur Food Point 2",
                "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
                "cuisines": [
                    "Kerala",
                    "Chinese"
                ],
                "avgRating": 3.8,
                "sla": {
                    "deliveryTime": 30,
                }
            }
        }

    ];

    return (
        <div className='body-container'>
            <div className='filter'>
                <button 
                className='filter-button'
                onClick = {
                   () => {
                    const filtertempData=tempData.filter( data => (data.info.avgRating >= 4));
                    setTempData(filtertempData);
                    console.log(tempData);
                    console.log("Button Clicked");
                    } 
                }
                >Filter</button>
            </div>
            <div className='resto-card-container'>
                { tempData.map( restaurant => (
                    <RestaurentCard key = {restaurant.info.id} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;    