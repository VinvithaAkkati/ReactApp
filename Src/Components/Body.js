import resList from '../Utils/mockData';
import RestaurentCard from './RestaurentCard';
const Body = () => {
    return (
        <div className='body-container'>
            <div className='search-bar'> Search</div>
            <div className='resto-card-container'>
                { resList.map( restaurant => (
                    <RestaurentCard key = {restaurant.info.id} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;    