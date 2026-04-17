import { Box } from "@gluestack-ui/themed";
import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen({ children }: { children: ReactNode }) {
  return (
    <LinearGradient
      colors={["#020617", "#0f172a", "#1e293b"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}