import Image from "next/image"
export default function Home() {
  return (
    <main>
      <div>
        <div>
      <div className=" flex xs:w-full sm:w-full flex-col justify-center bg-[#6B46C1] ">
      <div className="xs:justify-center xs:pt-12 xs:mx-4 sm:text-center text-white text-4xl font-bold sm:pt-14"><h1>Simple pricing for your buisness</h1></div>

        <div className=" text-white xs:text-lg xs:mx-4 xs:mt-5 xs:h-56 sm:text-xl  sm:text-center sm:pt-0 opacity-80 sm:h-44">Plans that are carefully crafted to suit your buisness</div>
        
        
        <div className="flex xs:items-center xs:flex-col xs:h-[30rem] xs:mt-[35rem] xs:max-w-xs sm:h-56 sm:flex-row absolute sm:mt-72 sm:max-w-screen-sm  bg-white shadow-lg rounded-lg self-center ">
          <div className=" flex flex-col xs:w-full xs:rounded-t-lg  space-y-3 justify-items-center xs:h-52 sm:h-56 sm:w-72 text-center bg-[#E2E2ED] relative text-black text-1xl pt-3 sm:rounded-none sm:rounded-l-md">
            <div className=" mt-3 font-bold">Premier PRO</div>
            <div className=" font-bold text-5xl">$329</div>
            <div>billed just once</div>
            <button className=" from-neutral-500 xs:w-48 sm:w-32  bg-[#805AD5] hover:bg-purple-400 text-white self-center rounded-md">Get Started</button>
          </div>
          <div className="xs:w-full grid space-x-5 sm:ml-4 sm:mt-4 sm:mb-4 text-[#2D3748] sm:text-sm">
            <div className="xs:ml-4 xs:mt-5 sm:mt-0 sm:ml-6 sm:w-96">Access these features when you get this pricing package for your business.</div>

            <div className= " flex flex-col sm:mt-4 xs:mt-4">
                
                    <div className="flex flex-row">
                      <Image src="/Ct.svg" height={25} width={17} alt="svg"></Image>
                      <p className="ml-3">International calling and messaging API</p>
                    </div>


                    <div className="flex flex-row mt-3">
                      <Image src="/Ct.svg" height={25} width={17} alt="svg"></Image>
                      <p className="ml-3">Additional phone numbers</p>
                    </div>


                    <div className="flex flex-row mt-3">
                      <Image src="/Ct.svg" height={25} width={17} alt="svg"></Image>
                      <p className="ml-3">Automated messages via Zapier</p>
                    </div>


                    <div className="flex flex-row mt-3">
                      <Image src="/Ct.svg" height={25} width={17} alt="svg"></Image>
                      <p className="ml-3">24/7 support and consulting</p>
                    </div>
                    
            </div>
          </div>
        </div>
      </div></div>
        <div className="xs:mt-[23rem] container mx-auto flex xs:flex-col xs:space-y-4 xs:self-center xs:px-4 sm:space-y-0 sm:mt-32 sm:flex-row xs:max-w-xs sm:max-w-screen-sm sm:text-left rounded-lg xs:font-bold sm:font-semibold text-sm text-[#171923]">
        <div className=" flex sm:ml-3"><Image src="/ds.svg" height={40} width={40} alt="svg"></Image><p className="sm:ml-2 xs:ml-3">30 days money back Guarantee</p></div>
        <div className="flex sm:ml-6"><Image src="/rs.svg" height={30} width={30} alt="svg"></Image><p className="sm:ml-2 xs:ml-6">No setup fees 100% hassle-free</p></div>
        <div className=" flex sm:ml-6 xs:pb-16 sm:pb-0"><Image src="/ca.svg" height={30} width={30} alt="svg"></Image><p className="sm:ml-2 xs:ml-6">No monthly subscription Pay once and for all</p></div>
      </div>
    </div>
    </main>
  )
}