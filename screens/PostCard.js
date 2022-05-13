import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default class PostCard extends React.Component {
  

  render(){
return(
<View style={styles.container}>
 <View style={styles.cardContainer}>
<View style={styles.authorContainer}>
<View style={styles.authorImageContainer}>
<Image
 source={require('../assetss/assets/profile_img.png')}
style={styles.profileImage}
>
</Image>
</View>
<View style={styles.authorNameContainer}>
<Text style={styles.authorNameText}>{this.props.post.author}</Text>
</View>
</View>
<Image source={require('../assetss/assets/post.jpeg')} style={styles.postImage}/>
<View style={styles.captionContainer}>
<Text  style={styles.captionText}>
{this.props.post.caption}
</Text>
</View>
<View style={styles.actionContainer}>
<View style={styles.likeButton}>
 <Ionicons name={"heart"}  size={RFValue(30)} color={"white"}/>
<Text style={styles.likeText}>12K</Text>
</View>
</View>
</View>
</View>
        )
}

}

const styles = StyleSheet.create({
container:{
flex:1
},
cardContainer:{
 margin: RFValue(13),
 backgroundColor: '#2f345d',
 borderRadius: RFValue(20),
},
authorContainer:{

},
authorImageContainer:{

},
profileImage:{
width: "100%",
height: "100%",
resizeMode: "contain"
},
authorNameContainer:{

},
authorNameText:{
fontSize: RFValue(18),
 color: 'white',
},
postImage:{
resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
},
captionContainer:{
paddingLeft: RFValue(20),
justifyContent: 'center',
},
captionText:{
fontSize: RFValue(25),
color: 'white',
},
actionContainer:{
justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
},
likeButton:{
width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
},
likeText:{
  color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
}
})

