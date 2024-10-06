
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from "../components/NewsletterBox"


const Contact = () => {
    return (
        <div>
            <div className="text-center text-2xl border-t pt-10">
                <Title text1={'CONTACT'} text2={'US'}/>
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <p className='text-gray-500'>4597 Mohakhali DOHS, <br />DHAKA- 1211</p>
                    <p className='text-gray-500'>Phone: +134212333 <br />Email: Example@gmail.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at All Bazar</p>
                    <p className='text-gray-500'>Learn more about our teams and job openings</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                </div>
            </div>
            <NewsletterBox />

        </div>
    )
}

export default Contact