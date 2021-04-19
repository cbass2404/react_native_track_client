import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";

// context
import { Context as AuthContext } from "../context/AuthContext";

// local files
import Spacer from "../components/Spacer";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;
