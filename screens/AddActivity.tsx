import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import ActivityForm from '../components/ActivityForm';

export default function NewActivity() {
    return (
        <View>
            <ActivityForm />
        </View>
    );

}
