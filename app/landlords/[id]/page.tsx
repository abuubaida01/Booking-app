import Image from "next/image"
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";

const LandlordDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="gird grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-5 rounded-xl border border-gray-300 shadow-sm">
            <Image 
              src="/images4.jpeg"
              width={200}
              height={200}
              alt="landlord name"
              className="rounded-full"
            />

            <h1 className="mt-5 text-2xl">Abu-ubaida</h1>
            <ContactButton />
          </div>
          
        </aside>

        <div className="col-span-1 md:col-span-4 pl-0 md:pl-5">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <PropertyList />          
          </div>
        </div>
      </div>
    </main>
  )
}


export default LandlordDetailPage;