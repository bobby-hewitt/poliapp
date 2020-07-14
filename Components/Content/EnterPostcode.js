import React, { useContext}  from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Easing,
  Dimensions,
  AsyncStorage
} from 'react-native';
import Context from '../../context'
import { TextInput } from '../'

import globalStyles from '../../style'
const LocalContent = ({}) => {
	const state = useContext(Context)

	function onSubmitPostcode(postcode){
		
		fetch(`http://localhost:4001/api/postcode?postcode=${postcode}`)
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
			<Text style={globalStyles.bodycopy}>To help us find your MP you'll need to enter your postcode</Text>
	        <TextInput onSubmit={onSubmitPostcode} placeholder="Enter your postcode" />
	        <Text style={globalStyles.bodycopy}>We won't ever pass this information on</Text> 
      	</React.Fragment>
  )
}


const styles = StyleSheet.create({
  
});
export default LocalContent;

