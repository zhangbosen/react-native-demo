/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

const Dimensions = require("Dimensions");
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require("./img/icon.png")} style={styles.imgStyle}/>

                {/*两个输入框和密码框*/}
                <TextInput
                    style={styles.inputStyle}
                    underlineColorAndroid="transparent"
                    placeholder="请输入用户名"
                    clearButtonMode="always"
                />
                <TextInput
                    style={styles.inputStyle}
                    secureTextEntry={true}
                    clearButtonMode="always"
                    underlineColorAndroid="transparent"
                    placeholder="请输入密码"
                />

                {/*登录按钮*/}
                <TouchableOpacity
                    style={styles.loginStyle}
                    activeOpacity={0.6}
                    onPress={() => this._login()}
                >
                    <Text style={styles.loginTextStyle}>登&nbsp;&nbsp;录</Text>
                </TouchableOpacity>


                {/*下边按钮*/}
                <View style={styles.defaultStyle}>
                    {/*左边*/}
                    <TouchableOpacity>
                        <Text>无法登录</Text>
                    </TouchableOpacity>

                    {/*右边*/}
                    <TouchableOpacity>
                        <Text>新用户</Text>
                    </TouchableOpacity>
                </View>


                {/*其他方式*/}
                <View style={styles.bottomStyle}>
                    <Text>其它方式登录:</Text>
                    <Image style={styles.bottomImgStyle} source={require("./img/icon3.png")} />
                    <Image style={styles.bottomImgStyle} source={require("./img/icon7.png")}/>
                    <Image style={styles.bottomImgStyle} source={require("./img/icon8.png")}/>
                </View>
            </View>
        )
    }
    _login() {
        alert("请输入用户名")
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8e8e8",
        alignItems: "center"
    },
    imgStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 80,
        borderWidth: 2,
        borderColor: "#fff",
        marginBottom: 30
    },
    inputStyle: {
        width: Dimensions.get("window").width,
        height: 36,
        backgroundColor: "#fff",
        marginBottom: 1,
        textAlign: "center"
    },
    loginStyle: {
        marginTop: 30,
        marginBottom: 10,
        width: Dimensions.get("window").width * 0.95,
        height: 30,
        backgroundColor: "green",
        borderRadius: 5,

        justifyContent: "center",
        alignItems: "center"
    },
    loginTextStyle: {
        fontSize: 16,
        color: "#fff"
    },
    defaultStyle: {
        width: Dimensions.get("window").width * 0.95,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomStyle: {
        position: "absolute",
        left: 10,
        bottom: 10,
        flexDirection: "row",
        alignItems: "center",

    },
    bottomImgStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10
    }

});
