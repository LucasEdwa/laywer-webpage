import Specialization from '../components/specialization';
import Hero from '../images/hero.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleDown);
export default function Home() {
    return (
        <div className='w-full '>
            <header className="flex items-center flex-col ">
                <img src={Hero} className='h-[22rem] cover w-full ' alt="" />
                <div className="text-center text-white absolute flex items-center flex-col gap-12 z-1 top-36 p-4">
                    <p>Alla kan hamna i svåra situationer. Då finns vi här.</p>
                    <div className="flex flex-col justify-between w-full items-center gap-6"> 
                        <a href="#contact" className="border b-white w-1/2 text-white p-2 rounded">KONTAKTA OSS</a>
                        <a href="#specialization" className=" text-4xl rounded flex justify-center ">       
                            <FontAwesomeIcon icon="angle-down" />
                        </a>
                    </div>
                </div>
            </header>
            <Specialization />
        </div>
    );
}