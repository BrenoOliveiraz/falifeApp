import Screen from "@/src/components/Screen";
import { Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import { ClassForm } from "@/src/modules/classes/components/ClassForm";
import { useCreateClass } from "@/src/modules/classes/hooks/useCreateClass";


export default function CreateClass() {
  const { id } = useLocalSearchParams();

  const {
    name,
    shift,
    year,
    setName,
    setShift,
    setYear,
    handleCreate,
  } = useCreateClass(id as string);

  return (
    <Screen>
      <VStack space="lg">
        <ClassForm
          name={name}
          shift={shift}
          year={year}
          onChangeName={setName}
          onChangeShift={setShift}
          onChangeYear={setYear}
        />

        <Button onPress={handleCreate}>
          <ButtonText>Salvar turma</ButtonText>
        </Button>
      </VStack>
    </Screen>
  );
}