import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types'
import Formik from 'formik';

const newActivity = t.struct({
    name: t.String,
    duration: t.Number,
});

const Form = t.form.Form;

export default function ActivityForm() {

    let _form;

    const handleSubmit = () => {
        const value = this._form.getValue();
        console.log('submitted');
    }


    return (
        <View style={styles.container} >
            <Form 
                ref={c => _form = c}
                type={newActivity} 
            />
            <Button title='SUBMIT' onPress={handleSubmit}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'whitesmoke',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
});
