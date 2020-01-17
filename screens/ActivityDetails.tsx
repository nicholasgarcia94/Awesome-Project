import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

export default function ActivityDetails({ navigation }) {
    const rating = navigation.getParam('rating');
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Activity Name: { navigation.getParam('name')}</Text>
                <Text>Duration: { navigation.getParam('duration')} hours</Text>
                <Text>Notes: { navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Activity Rating: </Text>
                    <Image source={images.ratings[rating]}></Image>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})
