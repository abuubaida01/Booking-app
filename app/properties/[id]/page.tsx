import Image from "next/image"
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-6 m-10 pb-10">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image 
          fill 
          src="/images1.jpeg"
          className="object-cover w-full h-full"
          alt='beach house'
        />

      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Propery Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedroom - 1 Bathroom
          </span>
          <hr />
          <div className="py-5 mb-4 flex items-center space-x-4">
            <Image 
              src="/images4.jpeg"
              width={50}
              height={50}
              className="rounded-full"
              alt='The user name'
            />

            <p><strong>Abu-Ubaida</strong> is your host</p>

            <hr /> 
            <p className="mt-6 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore rerum doloremque in illum iste ipsum earum quam! Sapiente quos delectus suscipit facilis corporis ullam accusantium id culpa quae facere.
            </p>
          </div>
        </div>

        <ReservationSidebar />
      </div>

    </div>
  )
}

export default  PropertyDetailPage;