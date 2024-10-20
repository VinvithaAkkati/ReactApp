import {IMG_URL} from '../Utils/constant';

const RestaurentCard = (props) => {
    //console.log(props);
    const {resData}=props;
    const {avgRating,cloudinaryImageId,name,cuisines,sla} = resData?.info;
    // const {deliveryTime} = resData?.info.sla ;
    return (
        <div className="resto-card">
            <img className="restro-logo" 
                src={ IMG_URL  + cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} Stars</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
 );
};

export default RestaurentCard;