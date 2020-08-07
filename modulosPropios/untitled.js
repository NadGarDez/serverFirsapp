import React, { Component,useRef } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import {RTCView,mediaDevices} from 'react-native-webrtc';
//import Permissions from 'react-native-permissions';

export default class Record extends Component{

	constructor(props){
		super(props);

		this.state={
			videoURL:null,
			permiso:null,
			permiso2:null

		}

		

		this.iniciarStream= this.iniciarStream.bind(this);
		this.permisos= this.permisos.bind(this);
	}

	iniciarStream(){
		
		console.log(mediaDevices.getUserMediacd);
		

		mediaDevices.getUserMedia({
	        audio: true,
	        video: {
	          mandatory: {},
	        }
	    })
	    .then(stream => {
		    console.log(stream);
		})
		.catch(error => {
		    // Log error
		});

	}

	async permisos(){
		Alert.alert('consediendo');

		permiso = await Permissions.askAsync(Permissions.CAMERA);

		


		
		permiso2 = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

		
		
		this.state.permiso= permiso;
		this.state.permiso2= permiso2;


		
		this.forceUpdate();

		console.log(this.state.permiso);

	}


	componentDidMount() {
	  	this.permisos();
  	}


	render(){

		
		return (
			<View style={{height:'100%',width:'100%',backgroundColor:'blue',display:'flex',alignItems:'center',justifyContent:'center'}}>
				<TouchableOpacity
					onPress={

						this.iniciarStream
					}
				>
					<Text>
						iniciarStream
					</Text>
				</TouchableOpacity>

			</View>
		);

    
	}
}


