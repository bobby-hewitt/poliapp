import {
	StyleSheet 
} from 'react-native'

const styles = StyleSheet.create({
	header:{
		fontSize:16,
		color:'#101010',
		fontWeight:'bold'
	},
	title: {
		fontWeight:'bold',
    	fontSize:32,
	},
	subtitle: {
		fontSize:24,
	},
	bodycopy: {
		fontSize:16,
		color:'#676767'
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.26,
		shadowRadius: 7,
		elevation: 10,
	}
})

export default styles