import Image from "next/image"

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-12 text-2xl">My reservations</h1>

      <div className="mt-10">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image 
                fill
                src="/images2.jpeg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt='my reservation images'
              />
            </div>
          </div>

          <div className="cols-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mt-2"><strong>Check in date:</strong> 15/2/2024</p>
            <p className="mt-2"><strong>Checkout date:</strong> 17/2/2024</p>
            <p className="mt-2"><strong>Number of nights:</strong> 2</p>
            <p className="mt-2"><strong>Total price:</strong> $2000</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>


        </div>
      </div>


      <div className="mt-10">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image 
                fill
                src="/images2.jpeg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt='my reservation images'
              />
            </div>
          </div>

          <div className="cols-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mt-2"><strong>Check in date:</strong> 15/2/2024</p>
            <p className="mt-2"><strong>Checkout date:</strong> 17/2/2024</p>
            <p className="mt-2"><strong>Number of nights:</strong> 2</p>
            <p className="mt-2"><strong>Total price:</strong> $2000</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>


        </div>
      </div>


      <div className="mt-10">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image 
                fill
                src="/images2.jpeg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt='my reservation images'
              />
            </div>
          </div>

          <div className="cols-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mt-2"><strong>Check in date:</strong> 15/2/2024</p>
            <p className="mt-2"><strong>Checkout date:</strong> 17/2/2024</p>
            <p className="mt-2"><strong>Number of nights:</strong> 2</p>
            <p className="mt-2"><strong>Total price:</strong> $2000</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>


        </div>
      </div>


      <div className="mt-10">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image 
                fill
                src="/images2.jpeg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt='my reservation images'
              />
            </div>
          </div>

          <div className="cols-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mt-2"><strong>Check in date:</strong> 15/2/2024</p>
            <p className="mt-2"><strong>Checkout date:</strong> 17/2/2024</p>
            <p className="mt-2"><strong>Number of nights:</strong> 2</p>
            <p className="mt-2"><strong>Total price:</strong> $2000</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>


        </div>
      </div>
    </main>
  )
}

export default MyReservationsPage