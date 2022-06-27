import banner from '../../assets/images/banner-girl.png'
import FeaturedProduct from './FeaturedProduct';
import RecommndedProduct from './RecommndedProduct';
const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 mt-5'>
                         <h1><strong>See</strong> everything with <strong>Clarity</strong></h1>
                        <small>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</small>
                       <div> <button className="btn btn-outline-success bg-dark text-white  mt-3" type="submit">Shop Now</button></div>
                    </div>
                    <div className='col-6 mt-5 my-1'>
                        <img src={banner} style={{ width: '600px' }} />
                    </div></div>
            </div>
            <FeaturedProduct/>
        <RecommndedProduct/>
        </>
    )
}
export default Home;