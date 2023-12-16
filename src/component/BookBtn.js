import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BookBtn = () => {
  return (
    <View style={styles.container}>
        <View style={{
            backgroundColor: '#005E54',
            paddingVertical: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity >
            <Text style={{
                color: '#fff',
                fontFamily: 'Poppins-Regular',
                fontSize: 16
            }}>
                Book Now
            </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BookBtn

const deviceWidth = Math.round(Dimensions.get('window').width)
const deviceheight = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: deviceWidth - 30,
        left: 15,
        bottom: 10
    }
})