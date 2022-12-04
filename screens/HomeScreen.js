import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from "../sanity";




const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
      sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->
            }
        }`).then(data => {
            setFeaturedCategories(data);
        });
      
    }, []);
    
  return (
    <SafeAreaView className='pt-10 bg-green-900'>
       
            {/* HEADER */}
            <View className="flex-row pb-3 items-center mx-4 space-x-1 ">
            <Image
                    style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                    }}
                    source={require('../images/logo2.png')}
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-200 text-xs'>Order Now!</Text>
                    <Text className='font-bold text-gray-200 text-xl'>Current Location
                    <ChevronDownIcon size={20} color="#69BE6F"/>
                    </Text>
                </View>

                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login')
                }}>
                <UserIcon size={35} color="#69BE6F"/>
                </TouchableOpacity>
                
            </View>
            {/* search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4"> 
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon size={20} color="gray"/>
                    <TextInput placeholder='restaurants and cuisines'
                    keyboardType='default'/>
                </View>
                <AdjustmentsVerticalIcon size={35} color="#69BE6F"/>
            </View>

        {/* Body */}
        <ScrollView
            className="bg-gray-200"
            contentContainerStyle={{
                paddingBottom: 150,
            }}>
            {/* categories */}

            <Categories/>

            {/* featured Rows */}

            {featuredCategories?.map(category =>(
                <FeaturedRow 
                    key={category._id}
                    id = {category._id}
                    title={category.name}
                    description={category.short_description}
                />
            )) }

                      
        </ScrollView>
        <View className='mx-60 bg-yellow-500'>
            <Text>Moi</Text>
        </View>
    </SafeAreaView>
    
  );
};

export default HomeScreen;