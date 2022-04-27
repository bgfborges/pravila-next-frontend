import Image from "next/image";
import { FaPlay } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

export default function Banner() { 
    return(
        <div className="w-full bg-gradient-to-r from-black to-transparent">
            <div className="flex flex-col h-[95vh] space-y-2 pl-16 py-16 md:space-y-4 lg:justify-center bg-gradient-to-t from-black to-transparent">
                <div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen">
                    <Image src="https://wallpaperaccess.com/full/2032985.jpg" 
                    layout="fill"
                    objectFit="cover"
                    />
                </div>

                <h1 className="text-2xl lg:text-7xl font-bold">Estudos de Russo</h1>
                <strong className="text-xl text-celadon">Grupo Geoforça</strong>
                <p className="max-w-xs font-light text-shadow-md py-4 text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque delectus aut magni. Sint dolore amet odio aliquid, odit asperiores esse nemo quidem accusamus? Nisi nesciunt dicta atque rem quod.</p>

                <div className="flex space-x-3">
                    <button className="bannerButton bg-red text-white text-sm">
                        <FaPlay className="text-white h-3 w-3" /> Participar
                    </button>
                    <button className="bannerButton bg-darker text-sm">
                        <AiFillInfoCircle className="text-white h-4 w-4" />
                        Mais Informações
                    </button>
                </div>
            </div>
        </div>
    );
}