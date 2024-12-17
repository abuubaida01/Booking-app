import PropertyList from "@/app/components/properties/PropertyList"

const MyProperties = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <PropertyList />          
      </div>
    </main>
  )
}

export default MyProperties