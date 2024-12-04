import { Stack } from "expo-router";

const rootLayout = () => {
    return (
        <Stack>

            <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>

            <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>

            <Stack.Screen name="cadastro_usuario" options={{ headerShown: false }}></Stack.Screen>

            <Stack.Screen name="editar_perfil" options={{ headerShown: false }}></Stack.Screen>

        </Stack>
    )
};

export default rootLayout;
