import React, {useState,useEffect} from 'react';
import {View, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button,TextInput,Text, DataTable } from 'react-native-paper';
import Entries from './Entries'
import personService from '../../services/persons';


const Vacinetbl = ({members}) => {
  if (members.length === 0) {
    return<Text>Add Members</Text>
  }

  return (
  <DataTable>
  <DataTable.Header>
    <DataTable.Title>name</DataTable.Title>
    <DataTable.Title >1 Dose</DataTable.Title>
    <DataTable.Title>2 Dose</DataTable.Title>
  </DataTable.Header>
  {members.map((ele,index) => <Entries ele={ele} key={index}/>)}
  </DataTable>)

}
const Vaccine = () => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [name,setName] = useState("");
  const [members,setMembers] = useState([]);

  useEffect(() => {
    personService
      .getAll()
      .then(nwperson => {
        const smem = nwperson.map(e => {
        const dose2 = new Date()
        const dose1 = new Date(e.number)
        dose2.setDate(dose1.getDate()+10)
        return {name:e.name,dose1:dose1,dose2:dose2}
        })
        setMembers(smem)})
    },[]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  //console.log("date",date.toLocaleDateString("en-US"),"name",name)

  const submitMember = () => {
    const dose2 = new Date()
    dose2.setDate(date.getDate()+10)
   // console.log("name",name,"dose1",date.toLocaleDateString("en-US"),"dose2",dose2.toLocaleDateString("en-US"))
    setMembers([...members,{name:name,dose1:date,dose2:dose2}])
    setName("")
    setDate(new Date())
    const personObj = {name:name,number:date.toLocaleString()};
    personService.create(personObj)
  }

  return (
    <View>
    <View>
      <TextInput
      label = "Name"
      onChangeText={name => setName(name)}
      value={name}
    />
    </View>
      <View>
        <Button onPress={showDatepicker} mode="contained" icon="calendar">
        <Text>Select Date</Text>
        </Button>
      </View>
      <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
      <View>
      <Button onPress={submitMember} mode="contained" >
        <Text>Submit</Text>
        </Button>
      </View>
      <Vacinetbl members={members} />
    </View>
  );
};
export default Vaccine;