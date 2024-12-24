'use client';
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItems";

// this is to define the type of the property
export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  
  const getProperties = async () => {
    const url = "http://127.0.0.1:8000/api/properties/";
    
    await fetch(url, {method: "GET", headers: {"Content-Type": "application/json"}}) 
    .then(response => response.json())
    .then((json) => {
      console.log('json', json);
      setProperties(json.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  };

  // this is called when page is loaded or refreshed
  useEffect(() => {
    getProperties();
  }, []);

  
  return (
    <>
      {properties.map((property) => (
        <PropertyListItem 
          key={property.id}
          property={property}
          />
      ))}
    </>
  )
}

export default PropertyList;