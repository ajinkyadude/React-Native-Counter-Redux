import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Style from './CounterStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addition, substraction } from '../React-Redux/Action/Action';

const Counter = () => {
    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const [dis,setDis]=useState(false);

    useEffect(()=>{
        if(data===0)
        {
            setDis(true);
        }   
        else
        {
            setDis(false);
        }
   },[data])
    return (
        <View style={Style.btn1}>
            <Button title='Increament' onPress={() => dispatch(addition())} />
            <Text>{data}</Text>
            <Button title='Decreament' onPress={() => dispatch(substraction())} disabled={dis} />
        </View>
    )
}

export default Counter;