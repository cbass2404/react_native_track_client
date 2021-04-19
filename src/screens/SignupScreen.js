import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

// context
import { Context as AuthContext } from "../context/AuthContext";
// local files
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up For Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            {state.errorMessage ? (
                <Text style={styles.errorMessageStyle}>
                    {state.errorMessage}
                </Text>
            ) : null}
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signup({ email, password })}
                />
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250,
    },
    errorMessageStyle: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15,
    },
});

export default SignupScreen;
