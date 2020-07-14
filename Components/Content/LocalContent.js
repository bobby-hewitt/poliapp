import React, { useContext}  from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';
import Context from '../../context'
import EnterPostcode from './EnterPostcode'
import { Person } from '../'
import globalStyles from '../../style'
const LocalContent = ({}) => {
	const state = useContext(Context)
	return(
		<View>
			{!state.mp &&
				<EnterPostcode />
			}
			{state.mp &&
				<Person mpId={state.mp}/>
			}
		</View>
	)
}


const styles = StyleSheet.create({
  
});
export default LocalContent;

