import { View, Dimensions } from "react-native";
import { Text, VStack, HStack} from "@gluestack-ui/themed";


const { width } = Dimensions.get("window");

export function ScreenHeader({title, adress}: any) {
    return (
        <View style={{ height: 220, backgroundColor: 'transparent' }}>

            <View
                style={{
                    position: "absolute",
                    backgroundColor: "#003594",
                    width: width * 1.85,
                    height: width * 1,
                    borderRadius: width,
                    top: -width * 0.50,
                    left: -width * 0.80,
                }}
            />

            <VStack space="md" px={20} pt={50} style={{ zIndex: 1 }}>

                <VStack mt="$4">
                    <Text color="$white" size="3xl" bold style={{ fontSize: 28 }}>
                        {title}
                    </Text>
                    <Text color="$white" size="3xl" bold style={{ fontSize: 15 }}>
                        {adress}
                    </Text>

                </VStack>
            </VStack>
        </View>
    );
}