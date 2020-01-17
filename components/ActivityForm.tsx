import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ActivityForm() {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', duration: '', rating: ''}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Activity title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Activity duration'
                            onChangeText={props.handleChange('duration')}
                            value={props.values.duration}
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Activity rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/> 
                    </View>
                )}
            </Formik>
        </View>   
    )
}

const styles = StyleSheet.create({

});