import { Avatar } from '@/components/avatar'
import { Email } from '@/components/email'
import { FloatButton } from '@/components/float-button'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import { EMAILS } from '@/utils/emails'
import { FlatList, Text, View, ViewProps } from 'react-native'

type HomeProps = ViewProps

export default function Home({ ...props }: HomeProps) {
  return (
    <View className="bg-gray-900 flex-1 pt-14 px-4" {...props}>
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no email" />
        <Avatar
          source={{ uri: 'https://github.com/TonySilva7.png' }}
          size="small"
        />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email key={item.id} data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />

      <FloatButton />
    </View>
  )
}
