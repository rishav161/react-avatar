import { MdKeyboardArrowDown } from "react-icons/md"

export default function Hero(){
    return (
        <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto flex flex-col justify-between min-h-screen lg:pt-0 pt-24">
                <div className="flex flex-col items-center justify-center text-center gap-y-4 pt-[10%]">
                    <p className="text-white">The Preserver and Protector. </p>
                    <h1 className="lg:text-4xl font-bold lg:leading-normal text-white font-poppins">
                        Discover the Avatar <br /> Different Avatar of Lord Vishnu
                    </h1>
                    <a href="#about" className="text-white np-underline">
                        <MdKeyboardArrowDown className="text-2xl"/>
                        SCROLL DOWN
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <p>THE ANCIENT</p>
                    <h4 className="text-white text-2xl py-4 font-poppins">
                        BHARAT- <span className="text-[#B22222]">Sanatan Civilization</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}
