import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';

export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if( window.scrollY > 0 ){
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, [])

    return(
        <header className={ isScrolled && 'bg-[#131313]'}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    width={100}
                    src="/images/logo.png"
                    className="cursor-pointer object-contain"
                    alt="Pravila Logo"
                />

                <ul className="hidden pt-3 space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Mosvies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light'>
                <BiSearch className="hidden h-6 w06 sm:inline" />
                <p className="hidden lg:inline font-medium">Minhas Aulas</p>
                <BsBellFill className="h-6 w-6" />
                <Link href="/account">
                    <img
                        width={50}
                        src="/images/profile-icon.png"
                        alt="Profile Icon"
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}