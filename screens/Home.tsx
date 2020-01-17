import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Modal, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import ActivityForm2 from '../components/ActivityForm2';
import ActivityForm from '../components/ActivityForm';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [modalOpen, SetModalOpen] = useState(false); 

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

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                    name='close'
                    size={24}
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    onPress={() => SetModalOpen(false)}
                    />
                    <ActivityForm/>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => SetModalOpen(true)}
            />

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

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        margin: 50

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius :10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})