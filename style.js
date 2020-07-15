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
    	fontSize:36,
	},
	subtitle: {
		fontSize:28,
		color:'#A6A6A6'
	},
	bodycopy: {
		fontSize:20,
		color:'#676767'
	},
	column:{
		flexDirection:'column',
		
	},
	row:{
		flexDirection:'row'
	},
	centered:{
		justifyContent:'center',
		alignItems:'center'
	},
	centeredJustify:{
		justifyContent:'center'
	},
	centeredAlign:{
		alignItems:'center'
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