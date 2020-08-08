import React from 'react';
import { Text } from 'react-native';
import { API_URL, API_TOKEN } from "@env"

const Home = () => {
    return (
        <Text>{API_URL}</Text>
    )
}

export default Home;