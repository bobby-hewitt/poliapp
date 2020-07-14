import { StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    card: {
        marginTop:-10,
        marginLeft:0,
        flex:1,
        borderRadius:30,
        
    },
    final:{
        marginTop:-40,
        flex:1,
        height:100,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    list: {
        overflow: 'visible'
    },
    reactView: {
        maxWidth:40,        
        marginRight:-10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    finalReactView: {
        width:180,        
        
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    reaction: {
        height: 30,
        marginBottom: 4
    },
     finalReaction: {
        height: 50,
        
        marginBottom: 4
    },

});

export default styles;