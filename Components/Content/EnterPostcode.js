import React, { useContext}  from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Easing,
  Dimensions,
  
} from 'react-native';
import Context from '../../context'
import AsyncStorage from '@react-native-community/async-storage';

import { TextInput } from '../'

import globalStyles from '../../style'
const LocalContent = ({}) => {
	const state = useContext(Context)

	function onSubmitPostcode(postcode){
		
		fetch(`https://poliapp.herokuapp.com/api/postcode?postcode=${postcode}`)
		.then(response => response.json())
  		.then(data => {
  			
  			state.setConstituency(data.constituency)

  			state.setMp(data.mp)
  			storeData(JSON.stringify(data))
  		})
  		.catch((err) => {
  			console.log('errrrorr')
  		})
	}

	storeData = async (data) => {
		
	  try {
	    await AsyncStorage.setItem('constituencyAndMP', data);
	  } catch (error) {
	    // Error saving data
  		}
	};
  return(
      	<React.Fragment>
	        		
	        <TextInput onSubmit={onSubmitPostcode} placeholder="Enter your postcode" containerStyle={{marginTop:24}} />
	       
      	</React.Fragment>
  )
}


const styles = StyleSheet.create({
  
});
export default LocalContent;

