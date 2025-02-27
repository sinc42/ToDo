import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffc4ff",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "TO-DO" }} />
    </Stack>
  );
};

export default RootLayout;
