/* eslint-disable camelcase */
import '@/styles/global.css'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { GestureHandlerRootViewProps } from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerRootView'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@/components/loading'

export default function RootLayout({ ...props }: GestureHandlerRootViewProps) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) return <Loading />

  return (
    <GestureHandlerRootView className="flex-1" {...props}>
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  )
}
