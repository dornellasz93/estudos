import React from 'react'
import {View, StyleSheet} from 'react-native'
import Primeiro from './components/Primeiro'
import Estilo from './components/estilo'
import MinMax from './components/MinMax'
import Aleatorio from './components/aleatorio'

export default () => (
    <View style={style.App}>
        {/* <MinMax min="3" max="20" /> */}
        <Aleatorio min={1} max={60} />
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})