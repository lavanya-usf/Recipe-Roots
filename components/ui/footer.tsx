import { Copyright } from 'lucide-react';
export default function Footer(){
    return(
        <div className="relative flex h-10 w-full items-center justify-center space-x-4 bg-gradient-to-r from-blue-900 to-blue-700 px-6 shadow-md text-white z-50">
            <span>About Us</span>
            <div className='flex flex-row space-x-2 items-center'> 
                <Copyright size={18}/>
                <span>Copyright</span>
            </div>
            
            <span> Contact Us</span>
        </div>
    )

}