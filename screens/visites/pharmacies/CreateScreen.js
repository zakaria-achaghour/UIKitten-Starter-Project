
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateScreen = () => {
    const navigation = useNavigation();
    const renderDrawerAction = () => (
      <TopNavigationAction
        icon={(style) => <Icon {...style} name="menu" />}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    );
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
            title="Create"
            alignment="center"
            accessoryLeft={renderDrawerAction}
        />
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} level="4">
            <Text>Pharmacies</Text>
        </Layout>
    </SafeAreaView>
  )
}

export default CreateScreen