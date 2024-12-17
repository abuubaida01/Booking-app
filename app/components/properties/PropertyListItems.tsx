import Image from "next/image";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer mt-10">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image 
          fill
          src="/images1.jpeg"
          sizes="{max-width: 768px} 768px, {max-width: 1200px}: 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="beach house"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">property Name</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500"><strong>$200</strong>per night</p>
      </div>
    </div>
  )
}

export default PropertyListItem;