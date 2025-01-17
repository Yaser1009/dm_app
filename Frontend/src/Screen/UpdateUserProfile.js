import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import api from '../core/Service';


const UpdateUserProfile = () => {
    const navigation = useNavigation()    
    const username = useSelector(state => state.app.username);
    const[password,setpassword] = useState('');
    const[mobile,setmobile] = useState('');
    const[email,setemail] = useState('');
    const[postcode,setpostcode] = useState('');

    // useEffect(()=>{
    //     console.log(pwd)
    //     console.log(repwd)
    // })

    const UpdateProfile = async () => { 

        const postobj = {
            username:username,
            password:password,
            mobile:mobile,
            email:email,
            postcode:postcode
        }

        await axios.put(`${api}/user/update`,postobj)
        .then(function (response){
            console.warn('Update profile successful')
            navigation.goBack()           

        })
        .catch(function (error){
            console.log(error)
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.title}>
                    <Text style={styles.title_txt}>
                       Update Details 
                    </Text>
                    
                </View> 
    
                <View style={styles.view_row}>
                    <Text style={{marginLeft:5, color:'black'}}>Password</Text>
                        <View style={styles.input_box}>
                            <TextInput style={{color:'white'}} onChangeText={setpassword}/>
                        </View> 
                    
                      <Text style={{marginLeft:5, color:'black'}}>Email</Text>
                        <View style={styles.input_box}>
                            <TextInput style={{color:'white'}} onChangeText={setemail}/>
                        </View> 

                     <Text style={{marginLeft:5, color:'black'}}>Mobile</Text>
                        <View style={styles.input_box}>
                            <TextInput style={{color:'white'}} onChangeText={setmobile}/>
                        </View> 

                     <Text style={{marginLeft:5, color:'black'}}>Postcode</Text>
                        <View style={styles.input_box}>
                            <TextInput style={{color:'white'}} onChangeText={setpostcode}/>
                        </View>  
                </View>
            </View>
    
            <View style={styles.view_row}>
                <TouchableOpacity style={styles.btn} onPress={UpdateProfile}>
                    <Text style={styles.btn_text}>Update Details</Text>
                </TouchableOpacity>
            </View> 
        </SafeAreaView>
    )
    
}
    
    const styles = StyleSheet.create({
        container:{
            justifyContent:"center",
        },
        
        title:{
            backgroundColor:'grey',
            alignItems:'center',
            paddingVertical:13
        },
    
        title_txt:{
            fontWeight:'bold',
            color:'black'
       
        },
    
        header_txt:{
            fontSize:24,
            fontWeight:'bold',
            color:'black'
        },
    
        context_txt:{
            fontSize:15,
            color:'black'
        }, 
        input_box:{
            backgroundColor:'black',
            borderWidth: 1, 
            marginTop: 20
        },
    
        btn:{
            marginTop:20,
            backgroundColor: 'black', 
            paddingVertical: 10
            
        },
        btn_text:{
            textAlign:'center',
            color:'white',
            fontSize: 20,
        },
    
        line:{
            flex:1,
            height:1,
            backgroundColor:'black'
        },
        
        or_txt:{
            color:'black',
            width:20,
            textAlign:'center'
        },
    
        signin_btn:{
            marginTop:55,
            alignSelf:'center'
        },
    
        signin_txt:{
            color:'black',
            fontSize:16,
            fontWeight:'bold'
        },
        view_row:{
            marginTop:20
        }
    }) 
export default UpdateUserProfile;