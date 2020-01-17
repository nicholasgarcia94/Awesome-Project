import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import ActivityForm2 from '../components/ActivityForm2';

export default function NewActivity() {
    return (
        <View>
            <ActivityForm2 />
        </View>
    );

}
