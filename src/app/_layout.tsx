import { Text, View, ViewProps, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Slot} from "expo-router";
import { GestureHandlerRootViewProps } from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerRootView';
import '@/styles/global.css'



export default function RootLayout({...props}: GestureHandlerRootViewProps) {

  return(
    <GestureHandlerRootView {...props}>
      <Slot />
    </GestureHandlerRootView>
  )
}
