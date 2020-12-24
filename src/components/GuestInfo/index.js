import React, {useState} from "react";
import { Text, TextInput, View } from 'react-native'
import {GuestInfoContainer, confirmButton, styles} from './GuestInfoElements'
import DatePicker from 'react-date-picker';
const GuestInfo = () => {
  const [name, setName] = useState("First"); 
  const [last, setLast] = useState("Last");
  const [tel, setTel] = useState("555");
  const [email, setEmail] = useState("email");
  const [value, onChange] = useState(new Date());
  const [request, setRequest] = useState("request");
  return (
    <GuestInfoContainer>
      <h1 alignItems='center' >GuestInfo</h1>
      <View style={styles.container}>
      <Text>First Name:</Text>
      <TextInput style={styles.input} placeholder="Enter your first name here" onChangeText={(val)=>setName(val)}/>
      <Text>Last Name:</Text>
      <TextInput style={styles.input} placeholder="Enter your last name here"  onChangeText={(val)=>setLast(val)} />
      <Text>Tel</Text>
      <TextInput keyboardType="numeric" style={styles.input} placeholder="Enter your phone number here"  onChangeText={(val)=>setTel(val)}/>
      <Text>E-mail</Text>
      <TextInput style={styles.input} placeholder="Enter your e-mail here"  onChangeText={(val)=>setEmail(val)} />
      <Text>Package</Text>
      <DatePicker
        onChange={onChange}
        value={value}/>
      <Text>Special Requests</Text>
      <TextInput multiline numberOfLines={2} style={styles.input} placeholder="Enter your special requests here"  onChangeText={(val)=>setRequest(val)} />
    </View>
    <p >I have read and agreed to the terms and agreements</p>
    </GuestInfoContainer>
  );
};

export default GuestInfo;
