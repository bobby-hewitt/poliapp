import React, { useState, useEffect, useContext}  from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import globalStyles from '../style'
import { useQuery } from '@apollo/react-hooks'
import { GET_PERSON } from '../Helpers/queries'
import Quote  from './Quote'
const Person = ({mpId}) => {
	const [person, setPerson] = useState(null)
	const { loading, error, data, refetch } = useQuery(GET_PERSON, { 
		variables: {personId: mpId}
	})

	function getJSON(str) {
		try {
			JSON.parse(str);
		} catch (e) {
		return str
		}
		return JSON.parse(str)
	}



	useEffect(() => {
		if (data){
			console.log('changin')
			const MP = data.Person[0]
			if (MP.tweets){
				MP.tweets = getJSON(MP.tweets)
				
			}
			// MP.tweets = tweets
			setPerson(MP)
		}
	}, [data])
	if (error){
		return <Text>Error</Text>
	}
	if (loading || !person){
		return <Text>Loading</Text>
	}
	
	
	return(
		<View>
			<Image source={{uri: person.image}} style={styles.image}/>
			<Text style={[globalStyles.subtitle]}>{person.name}</Text>
			<Text style={[globalStyles.bodycopy]}>{person.party.name}</Text>
			{/*person.tweets.map((item, i ) => {
				return(
					<View style={{height:4000, width:100, backgroundColor:'red'}} />
				)
			})*/}
		</View>
	)
}


const styles = StyleSheet.create({
  image:{
  	width:100,
  	borderRadius:50,
  	height:100,

  }
});
export default Person;

