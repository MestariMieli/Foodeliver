import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategoies] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "category"]
    `).then(data => {
      setCategoies(data);
    })
  }, []);

  return (
    
    <ScrollView 
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      >
      {/* categorycard */}
      {categories.map((category) => (
        <CategoryCard 
        key={category._id}
        imgUrl={urlFor(category.image).url()}
        title={category.name}
        />
      ))}
    

    </ScrollView>
      
  );
};

export default Categories