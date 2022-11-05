import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, Alert, Dimensions, TextInput } from 'react-native';
import Constants from 'expo-constants';

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp({
  credential: applicationDefault()
});

const db = getFirestore();

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    mainscreen: 'block',
    sendscreen: 'none',
    requestscreen: 'none',
    splitscreen: 'none',
    activityscreen: 'none',
    recipientscreen: 'none',
    recipient: '',
    phoneNum: '',
    amount: '$',
}

backToMain  = () => this.setState(state => ({
    mainscreen: 'block',
    sendscreen: 'none',
    requestscreen: 'none',
    splitscreen: 'none',
    activityscreen: 'none',
    recipientscreen: 'none',
}));

sendPressed = () => this.setState(state => ({
    mainscreen: 'none',
    sendscreen: 'block',
    requestscreen: 'none',
    splitscreen: 'none',
    activityscreen: 'none',
    recipientscreen: 'none',
}));

requestPressed = () => this.setState(state => ({
    mainscreen: 'none',
    sendscreen: 'none',
    requestscreen: 'block',
    splitscreen: 'none',
    activityscreen: 'none',
    recipientscreen: 'none',
}));

splitPressed = () => this.setState(state => ({
    mainscreen: 'none',
    sendscreen: 'none',
    requestscreen: 'none',
    splitscreen: 'block',
    activityscreen: 'none',
    recipientscreen: 'none',
}));

activityPressed = () => this.setState(state => ({
    mainscreen: 'none',
    sendscreen: 'none',
    requestscreen: 'none',
    splitscreen: 'none',
    activityscreen: 'block',
    recipientscreen: 'none',
}));

recipientPressed = () => this.setState(state => ({
    mainscreen: 'none',
    sendscreen: 'none',
    requestscreen: 'none',
    splitscreen: 'none',
    activityscreen: 'none',
    recipientscreen: 'block',
}));

render() {
    return (
        <View style={styles.container}>
        
            {/*Josephine*/}
            <View style={{display: this.state.mainscreen }}>
                <View style={styles.topContainer}>
                    <Text style={styles.mainTitle}>
                        Send Money with Zelle
                    </Text>
                </View>
                <View style={styles.centerContainer}>
                
                    <TouchableHighlight
                        onPress={this.sendPressed}
                    >
                        <View style={styles.centerButtons}>
                            <Text style={styles.centerButtonText}>
                                Send
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={this.requestPressed}
                    >
                        <View style={styles.centerButtons}>
                            <Text style={styles.centerButtonText}>
                                Request
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={this.splitPressed}
                    >
                        <View style={styles.centerButtons}>
                            <Text style={styles.centerButtonText}>
                                Split
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                
                <View style={styles.rowContainer}>
                    <TouchableHighlight
                        onPress={this.activityPressed}
                    >
                        <View style={styles.bottomButtons}>
                            <Text style={styles.activity}>
                                ACTIVITY
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <Text style={styles.activity}>
                        |
                    </Text>
                    <TouchableHighlight
                        onPress={this.recipientPressed}
                    >
                        <View style={styles.bottomButtons}>
                            <Text style={styles.recipient}>
                                RECIPIENTS
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            {/*Vincenzo*/}
            <View style={{display: this.state.sendscreen}}>
                    <View style={styles.splitTopRowContainer}>
                        <TouchableHighlight
                            onPress={this.backToMain}
                        >
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/2e76a8fd4f24cc4704f3d3138c13a4f8' }}
                                style={{ height: 25, width: 25, marginLeft: 20 }}
                            />
                        </TouchableHighlight>
                        
                        <Text style={styles.splitTitleRow}>
                            Send Money
                        </Text>
                    </View>
                    
                    <View style={styles.sendContainer}>
                        <View style={styles.itemBox}>
                            <Text style={styles.itemText}>
                                Name:
                            </Text>
                            <TextInput style={styles.textInput}
                                onChangeText={(recipient) => this.setState({recipient})}
                                value={this.state.recipient}
                            />
                        </View>
    
                        <View style={styles.itemBox}>
                            <Text style={styles.itemText}>
                                Phone number:
                            </Text>
                            <TextInput style={styles.textInput}
                                onChangeText={(phoneNum) => this.setState({phoneNum})}
                                value={this.state.phoneNum}
                            />
                        </View>
                    
                        <View style={styles.itemBox}>
                            <Text style={styles.itemText}>
                                Amount:
                            </Text>
                            
                            <TextInput style={styles.textInput}
                                onChangeText={(amount) => this.setState({amount})}
                                value={this.state.amount}/>
                        </View>
                    </View>
                    
                    
                    <TouchableHighlight
                        onPress={() => { alert(this.state.amount + ' sent to ' + this.state.recipient) }}
                    >
                        <View style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                Send
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                {/*Vincenzo*/}
                <View style={{display: this.state.requestscreen}}>
                    <View style={styles.splitTopRowContainer}>
                        <TouchableHighlight
                            onPress={this.backToMain}
                        >
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/2e76a8fd4f24cc4704f3d3138c13a4f8' }}
                                style={{ height: 25, width: 25, marginLeft: 20 }}
                            />
                        </TouchableHighlight>
                        
                        <Text style={styles.splitTitleRow}>
                            Request Money
                        </Text>
                    </View>
                    
                    <View style={styles.sendContainer}>
                        <View style={styles.itemBox}>
                            <Text style={styles.itemText}>
                                Name:
                            </Text>
                            <TextInput style={styles.textInput}
                                onChangeText={(recipient) => this.setState({recipient})}
                                value={this.state.recipient}
                            />
                        </View>
    
                        <View style={styles.itemBox}>
                            <Text style={styles.itemText}>
                                Phone number:
                            </Text>
                            <TextInput style={styles.textInput}
                                onChangeText={(phoneNum) => this.setState({phoneNum})}
                                value={this.state.phoneNum}
                            />
                        </View>
                    
                        <View style={styles.itemBox}>
                            <Text style={styles.itemText}>
                                Amount:
                            </Text>
                            
                            <TextInput style={styles.textInput}
                                onChangeText={(amount) => this.setState({amount})}
                                value={this.state.amount}/>
                        </View>
                    </View>
                    
                    
                    <TouchableHighlight
                        onPress={() => { alert('You requested ' + this.state.amount + ' from ' + this.state.recipient) }}
                    >
                        <View style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                Request
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                {/*Josephine*/}
                <View style={{display: this.state.splitscreen }}>
                    <View style={styles.splitTopRowContainer}>
                        <TouchableHighlight
                            onPress={this.backToMain}
                        >
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/2e76a8fd4f24cc4704f3d3138c13a4f8' }}
                                style={{ height: 25, width: 25, marginLeft: 20 }}
                            />
                        </TouchableHighlight>
                        
                        <Text style={styles.splitTitleRow}>
                            Split Money
                        </Text>
                    </View>
                    
                    <View style={styles.splitContainer}>
                        <Text style={styles.inputRequest}>
                            Enter name:
                        </Text>
                        <View style={styles.rowContainer}>
                            <TextInput
                                value={this.state.recipient}
                                onChangeText={(recipient) => this.setState({recipient})}
                                style={styles.splitInputText}
                            />
                        </View>
                        
                        <Text style={styles.inputRequest}>
                            Enter mobile phone:
                        </Text>
                        <View style={styles.rowContainer}>
                            <TextInput
                                value={this.state.phoneNum}
                                onChangeText={(phoneNum) => this.setState({phoneNum})}
                                style={styles.splitInputText}
                            />
                        </View>
                        
                        <Text style={styles.inputRequest}>
                            Enter Amount:
                        </Text>
                        <View style={styles.rowContainer}>
                            <TextInput
                                value={this.state.amount}
                                onChangeText={(amount) => this.setState({amount})}
                                style={styles.splitInputText}
                            />
                        </View>
                        
                    </View>
                        <TouchableHighlight 
                            onPress={() => {
                                alert(this.state.amount + ' is split equally between you and ' + this.state.recipient)
                            }}
                        >
                            <View style={styles.splitButton}>
                                <Text style={styles.splitButtonText}>
                                    Split
                                </Text>
                            </View>
                        </TouchableHighlight>
                </View>
                
                {/*Aleenah*/}
                <View style={{display: this.state.activityscreen}}>
                    <View style={styles.activityTopRowContainer}>
                        <TouchableHighlight
                            onPress={this.backToMain}
                        >
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/2e76a8fd4f24cc4704f3d3138c13a4f8' }}
                                style={{ height: 20, width: 20, marginLeft: 20 }}
                            />
                        </TouchableHighlight>
                        
                        <Text style={styles.activityTitle}>
                            Actvity
                        </Text>
                    </View>
                    
                    <View style={styles.listItem}>
                        <View style={styles.topHalf}>
                            <View style={styles.profilePic}>
                                <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' }}
                                style={{ height: 30, width: 30 }}
                                />
                            </View>
                            <Text style={styles.activityName}>
                                Henry Carr
                            </Text>
                        </View>
                        <View style={styles.bottomHalf}>
                            <Text style={styles.activityMoney}> 
                                -$36.00
                            </Text>
                            
                            <Text style={styles.activityDate}> 
                                10/27/2022
                            </Text>
                        </View>
                    </View>
                        
                    <View style={styles.listItem}>
                        <View style={styles.topHalf}>
                            <View style={styles.profilePic}>
                                <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' }}
                                style={{ height: 30, width: 30 }}
                                />
                            </View>
                            <Text style={styles.activityName}>
                                Adam Bell
                            </Text>
                        </View>
                        <View style={styles.bottomHalf}>
                            <Text style={styles.activityMoney}> 
                                +$5.75
                            </Text>
                            
                            <Text style={styles.activityDate}> 
                                10/15/2022
                            </Text>
                        </View>
                    </View>
                        
                    <View style={styles.listItem}>
                        <View style={styles.topHalf}>
                            <View style={styles.profilePic}>
                                <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' }}
                                style={{ height: 30, width: 30 }}
                                />
                            </View>
                            <Text style={styles.activityName}>
                                Alice Lawry
                            </Text>
                        </View>
                        <View style={styles.bottomHalf}>
                            <Text style={styles.activityMoney}> 
                                -$20.00
                            </Text>
                            
                            <Text style={styles.activityDate}> 
                                10/14/2022
                            </Text>
                        </View>
                    </View>
                        
                    <View style={styles.listItem}>
                        <View style={styles.topHalf}>
                            <View style={styles.profilePic}>
                                <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' }}
                                style={{ height: 30, width: 30 }}
                                />
                            </View>
                            <Text style={styles.activityName}>
                                Alex Cruz
                            </Text>
                        </View>
                        <View style={styles.bottomHalf}>
                            <Text style={styles.activityMoney}> 
                                -$27.50
                            </Text>
                            
                            <Text style={styles.activityDate}> 
                                10/06/2022
                            </Text>
                        </View>
                    </View>
                        
                    <View style={styles.listItem}>
                        <View style={styles.topHalf}>
                            <View style={styles.profilePic}>
                                <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' }}
                                style={{ height: 30, width: 30 }}
                                />
                            </View>
                            <Text style={styles.activityName}>
                                Lizzy Smith
                            </Text>
                        </View>
                        <View style={styles.bottomHalf}>
                            <Text style={styles.activityMoney}> 
                                +$50.00
                            </Text>
                            
                            <Text style={styles.activityDate}> 
                                09/30/2022
                            </Text>
                        </View>
                    </View>
                        
                    <View style={styles.listItem}>
                        <View style={styles.topHalf}>
                            <View style={styles.profilePic}>
                                <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' }}
                                style={{ height: 30, width: 30 }}
                                />
                            </View>
                            <Text style={styles.activityName}>
                                Nyla Glaspy
                            </Text>
                        </View>
                        <View style={styles.bottomHalf}>
                            <Text style={styles.activityMoney}> 
                                -$45.00
                            </Text>
                            
                            <Text style={styles.activityDate}> 
                                09/15/2022
                            </Text>
                        </View>
                    </View>
                </View>
                
                {/*Dayshawn*/}
                <View style={{display: this.state.recipientscreen}}>
                    <View style={styles.recipientTopRowContainer}>
                        <TouchableHighlight
                            onPress={this.backToMain}
                        >
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/2e76a8fd4f24cc4704f3d3138c13a4f8' }}
                                style={{ height: 20, width: 20, marginLeft: 20 }}
                            />
                        </TouchableHighlight>
                        
                        <Text style={styles.activityTitle}>
                            Recipient
                        </Text>
                    </View>
                    
                    <View>
                        <View style={styles.recipienttop}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/b07cbf4073ac207acd092e07756b6912' }}
                                style={{ height: 20, width: 20, margin: 20 }}
                             />
                        </View>
                    </View>
                    
                    <View>
                        <Text style={styles.subTitle}>
                            My Recipients
                        </Text>
                    </View>
                        
                    <View style={styles.recipientContainer}>
                        <View style={styles.listProfile}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/85b0857df9b112bbe7846aa520255c4e' }}
                                style={{ height: 40, width: 40, marginLeft: 20 }}
                            />
                        
                            <Text style={styles.recipientname}>
                                Adam Bell
                            </Text>
                            
                            <Text style={styles.mobilephone}>
                                917-442-7981
                            </Text>
                            <Text style={styles.email}>
                                adambell1234@gmail.com
                            </Text>
                        </View>
                        
                        <View style={styles.listProfile}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/85b0857df9b112bbe7846aa520255c4e' }}
                                style={{ height: 40, width: 40, marginLeft: 20 }}
                            />
                            <Text style={styles.recipientname}>
                                Henry Carr
                            </Text>
                            
                            <Text style={styles.mobilephone}>
                                347-232-1496
                            </Text>
                            <Text style={styles.email}>
                                carrhenry@hotmail.com
                            </Text>
                        </View>
                        
                        <View style={styles.listProfile}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/85b0857df9b112bbe7846aa520255c4e' }}
                                style={{ height: 40, width: 40, marginLeft: 20 }}
                            />
                            
                            <Text style={styles.recipientname}>
                                Alex Cruz
                            </Text>
                            
                            <Text style={styles.mobilephone}>
                                212-859-4523
                            </Text>
                            <Text style={styles.email}>
                                alexcruz212@gmail.com
                            </Text>
                        </View>
                        
                        <View style={styles.listProfile}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/85b0857df9b112bbe7846aa520255c4e' }}
                                style={{ height: 40, width: 40, marginLeft: 20 }}
                            />
                            
                            <Text style={styles.recipientname}>
                                Nyla Glaspy
                            </Text>
                            
                            <Text style={styles.mobilephone}>
                                646-732-2461
                            </Text>
                            <Text style={styles.email}>
                                nylaaglaspy@aol.com
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContainer: {
        height: (deviceHeight/15),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Futura',
    },
    centerContainer: {
        height: 11*(deviceHeight/15),
        width: deviceWidth,
    },
    centerButtons: {
        height: (11*(deviceHeight/15))/3,
        backgroundColor: '#003B70',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerButtonText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Futura',
    },
    rowContainer: {
        height: 2*(deviceHeight/15),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    bottomButtons: {
        width: deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activity: {
        color: '#003B70',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Futura',
    },
    recipient: {
        color: '#003B70',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Futura',
    },
    
    titleText: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Futura',
    },
    itemBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        margin: 20,
    },
    itemText: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'Futura',
        color: 'white',
        marginRight: 5,
    },
    textInput: {
        height: 40,
        width: 150,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth: 1,
   
    },
    submitButton: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    submitButtonText: {
        height: 25,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#003B70',
        fontSize: 12,
        color: 'white', padding: 5, paddingLeft: 20, paddingRight: 20,
    },
    sendContainer: {
        backgroundColor: '#003B70',
        height: 13*(deviceHeight/16),
        width: deviceWidth,
    },
    
    topRowContainer: {
        height: (deviceHeight/15),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    splitTitleRow: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 65,
        fontFamily: 'Futura',
    },
    
    splitTopRowContainer: {
        height: (deviceHeight/15),
        width: deviceWidth,
        alignItems: 'center',
        flexDirection: 'row',
    },
    splitContainer: {
        backgroundColor: '#003B70',
        height: 13*(deviceHeight/16),
        width: deviceWidth,
    },
    inputRequest: {
        color: 'white',
        paddingLeft: 20,
        margin: 5,
        marginTop: 20,
        font: 25,
    },
    splitInputText: {
        width: deviceWidth,
        backgroundColor: 'white',
        paddingLeft: 10,
        padding: 10,
        margin: 20,
        marginTop: 5,
        width: 8*(deviceWidth/9),
        fontSize: 20,
        borderRadius: 10,
        fontFamily: 'Futura',
    },
    splitButton: {
        width: deviceWidth/3,
        height: deviceHeight/15,
        marginLeft: deviceWidth/3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003B70',
        margin: 5,
    },
    splitButtonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Futura',
    },
    
    
    topHalf: {
        flexDirection: 'column',
        height: deviceHeight/16,
    },
    
    bottomHalf: {
        flexDirection: 'column',
        height: deviceHeight/16,
        marginBottom: 10,
    },
    
    activityTopRowContainer: {
        height: deviceHeight/15,
        backgroundColor: "#003B70",
        width: deviceWidth,
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    activityTitle: {
        textAlign: 'center',
        fontFamily: 'Futura',
        color: 'white',
        marginLeft: 150,
    },
    
    listItem: {
        height: deviceHeight/7,
        backgroundColor: 'lightgray',
        width: deviceWidth,
        marginTop: 5,
    },
    
    activityName: {
        justifyContent: 'left',
        alignItems: 'left',
        textAlign: 'left',
        fontFamily: 'Futura',
        marginLeft: 20,

    },
    
    activityMoney: {
        textAlign: 'right',
        fontFamily: 'Futura',
        marginRight: 20,
    },
    
    activityDate: {
        textAlign: 'right',
        fontFamily: 'Futura',
        marginRight: 20,
        marginTop: 10

    },
    
    profilePic: {
        alignItems: 'left',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
    },
    
    recipientTopRowContainer: {
        height: deviceHeight/15,
        backgroundColor: "#003B70",
        width: deviceWidth,
        alignItems: 'center',
        flexDirection: 'row',
    },
    subTitle: {
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
    },
    recipienttop: {
        flexDirection: 'column',
        height: deviceHeight/15,
    },
    listProfile: {
        marginBottom: 10,
        backgroundColor: 'lightgray',
        width: deviceWidth,
        paddingTop: 5,
        paddingBottom: 5,
    },
    recipientname: {
        justifyContent: 'down',
        fontFamily: 'Futura',  
        marginBottom: 5,
        fontSize: 15,
        marginLeft: 20,
    },
    mobilephone: {
        fontFamily: 'Futura',
        fontSize: 15,
        marginLeft: 20,
    },
    email: {
        fontFamily: 'Futura',
        fontSize: 15,
        marginLeft: 20,
    },
    recipientContainer: {
        height: 12*(deviceHeight/15),
        marginTop: 15,
    },
});