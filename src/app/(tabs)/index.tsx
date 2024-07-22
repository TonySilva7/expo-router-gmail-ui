import { Text, View, ViewProps, StyleSheet } from 'react-native';

type HomeProps = ViewProps

export default function Home({...props}: HomeProps) {

  return(
    <View className='' style={styles.container} {...props}>
      <Text>Hello Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});