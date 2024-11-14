import moment from 'moment';
import logo from '../../assets/logo.png';
const Header = () => {

    let time = moment().format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div>
            <div className='flex flex-col justify-center mt-14'>
                <div className=' '>
                    <img className='w-1/4 mx-auto ' src={logo} alt="" />

                </div>
                <h1 className='text-center text-xl font-semibold text-gray-400 mt-5'>Journalism Without Fear or Favour</h1>
                <h1 className='text-center text-xl font-semibold  mt-5'>{time}</h1>
            </div>
        </div>
    );
};

export default Header;