import {Button, Dimensions, Image, StyleSheet, View} from "react-native";
import {ThemedView} from "../../components/ThemedView";
import icon from '../../assets/images/icon.png';
import {useAppDispatch, useAppSelector} from "../../src/redux/hooks";
import {selectIsAuthenticated, setUser} from "../../src/redux/features/auth/authSlice";
import {useEffect} from "react";
import {router} from "expo-router";

const screenWidth = Dimensions.get('window').width;
const imageWidth = screenWidth * 0.8;

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated]);

  const onLogin = () => {
    dispatch(setUser({name: 'John Doe'}));
  }

  return <ThemedView style={styles.container}>
    <Image source={icon} style={{width: imageWidth, height: imageWidth}}/>
    <View style={styles.buttonContainer}>
      <Button title={"Login"} onPress={onLogin}/>
    </View>
  </ThemedView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
});
