import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card'; 

export default function Home({ navigation }) {
    const [activities, SetActivities] = useState([
        {name: 'running', duration: 0.5, body: 'ran 3 miles', rating: 1, key: 1},
        {name: 'guitar', duration: 0.5, body: 'not much to say', rating: 3, key: 2},
        {name: 'reading', duration: 0.5, body: 'rah rah rah', rating: 5, key: 3},
        {name:'learning algebra', duration: 100, body: 'functions are hard', rating: 1, key: 4 }
    ]);

    const pressHandler = () => {
        navigation.navigate({
            routeName: 'AddActivity'
        })
    }

    return (
        <View style={globalStyles.container}>
            <FlatList
                keyExtractor={item => item.key.toString()}
                data={activities}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate({
                        routeName: 'ActivityDetails', 
                        params: item
                        })}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.name }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button title='Click to add new activity' onPress={pressHandler}/>
        </View>
    )
}
