
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { makeServer } from "../services/mirage/server";


if (__DEV__) {
  makeServer();
}
export default function Layout() {

  return (
    <GluestackUIProvider config={config}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}