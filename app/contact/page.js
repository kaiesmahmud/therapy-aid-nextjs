'use client'
export default function Home() {
    const handleSubmit = (e) => {
        e.preventdefault();
    }
    return (
        <div className='w-full  flex flex-col items-center justify-center gap-5'>
            <p className="mt-5 p-3 w-full bg-slate-100 text-center">Please Fill out the form, we will contact you as soon as possible</p>
            <form  onSubmit={handleSubmit} className='p-5 w-full md:w-[80%]  rounded bg-slate-900'>
                <div className=' lg:pt-16 w-full flex flex-col  justify-center items-center gap-7 bg-white bg-opacity-5 rounded  py-10'>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required 
                        placeholder='Your Name'
                        className='p-3 bg-transparent focus:outline-none border-b w-[80%]'
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        placeholder='Your Email'
                        className='px-3 py-2  bg-transparent focus:outline-none border-b w-[80%]'
                    />
                    <input type="tel" 
                    name="phone" id="phone"
                    placeholder='Phone '
                    className='px-3 py-2  bg-transparent focus:outline-none border-b w-[80%]'
                    required
                    />
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="8"
                        defaultValue={'I am interested in  ..'}
                        className='font-light px-3 py-2  bg-slate-800 text-white text-opacity-80 rounded focus:outline-none w-[80%]'
                    >
                        
                    </textarea>
                    <input 
                        type="submit" 
                        value="Submit Form"
                        className=' cursor-pointer bg-green-600 text-black hover:text-white  p-5 inline-block  hover:bg-green-800 rounded transition-colors ease-linear duration-150'
                        />
                </div>
            </form>
          </div>
    )}