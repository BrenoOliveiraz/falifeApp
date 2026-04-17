
import { ScreenHeader } from "@/src/components/HeaderScreen";
import Screen from "@/src/components/Screen";
import { SchoolForm } from "@/src/modules/schools/components/SchoolForm";
import { useCreateSchool } from "@/src/modules/schools/hooks/useCreateSchool";
import { Button, ButtonText, VStack } from "@gluestack-ui/themed";
import React from "react";
import { ScrollView } from "react-native";

export default function CreateSchool() {
  const { name, address, setName, setAddress, handleCreate } = useCreateSchool();

  return (
    <Screen>
      <VStack flex={1}>
       
        <ScreenHeader title="Escola nova" />

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        >
          <VStack space="xl" px="$4" mt="-$0">

            <SchoolForm
              name={name}
              address={address}
              onChangeName={setName}
              onChangeAddress={setAddress}
            />

            <Button 
              onPress={handleCreate} 
              size="lg" 
              backgroundColor="$blue600"
              borderRadius="$md"
            >
              <ButtonText>Salvar Escola</ButtonText>
            </Button>
          </VStack>
        </ScrollView>
      </VStack>
    </Screen>
  );
}