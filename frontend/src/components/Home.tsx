//@ts-ignore
import NutriCount from './NutriCount';
import Navbar from './NavBar';
//@ts-ignore
import Activity from './Activity';
//@ts-ignore
import Tables from './Tables';

import '../App.css';

export default function Home(){
    return (
        <div className='home bg-green-400'>
            <Navbar/>
            <div className='flex justify-between mx-20 my-5'>
                <Activity/>
                <NutriCount/>
            </div>
            <Tables></Tables>
        </div>


    )
}