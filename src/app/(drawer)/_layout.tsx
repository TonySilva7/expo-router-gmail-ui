import { CustomOptions } from '@/@types/navigation'
import { DrawerContent } from '@/components/drawer-content'
import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '80%',
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: 'Toas as caixas de entrada',
            iconName: 'all-inbox',
            isDivider: true,
            notifications: 5,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: 'Configurações',
            iconName: 'generating-tokens',
            isDivider: true,
            notifications: 12,
          } as CustomOptions
        }
      />
    </Drawer>
  )
}
