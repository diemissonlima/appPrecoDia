import { Tabs } from 'expo-router';
import React from 'react';
import { User, House, LayoutGrid, Logs, MapPin } from 'lucide-react-native'

const TabLayout = () => {
    return (
        <Tabs>

            <Tabs.Screen name='lista_produtos'  options={{
                headerShown: false, tabBarIcon: ({focused}) => (
                    <House size={35} color={focused ? 'blue' : 'black'}/>
                )
            }}></Tabs.Screen>

            <Tabs.Screen name='cadastro_produto' options={{
                headerShown: false, tabBarIcon: ({focused}) => (
                    <LayoutGrid size={35} color={focused ? 'blue' : 'black'}/>
                )
            }}></Tabs.Screen>

            <Tabs.Screen name='cadastrar_categoria' options={{
                headerShown: false, tabBarIcon: ({focused}) => (
                    <Logs size={35} color={focused ? 'blue' : 'black'}/>
                )
            }}></Tabs.Screen>

            <Tabs.Screen name='cadastrar_local' options={{
                headerShown: false, tabBarIcon: ({focused}) => (
                    <MapPin size={35} color={focused ? 'blue' : 'black'}/>
                )
            }}></Tabs.Screen>

            <Tabs.Screen name='perfil' options={{
                headerShown: false, tabBarIcon: ({focused}) => (
                    <User size={35} color={focused ? 'blue' : 'black'}/>
                )
            }}></Tabs.Screen>

        </Tabs>
    );
}

export default TabLayout;
