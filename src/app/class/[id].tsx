import Screen from "@/src/components/Screen";
import {
  Button,
  ButtonText,
  Divider,
  Heading,
  Text,
  VStack,
  HStack,
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert } from "react-native";
import { useClassDetail } from "@/src/modules/classes/hooks/useClassDetail";
import { ClassForm } from "@/src/modules/classes/components/ClassForm";
import { ClassInfoCard } from "@/src/modules/classes/components/ClassInfoCard";

export default function ClassDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const {
    school,
    classDetail,
    isEditing,
    setIsEditing,
    name,
    shift,
    year,
    setName,
    setShift,
    setYear,
    handleSave,
    handleDelete,
  } = useClassDetail(id as string);

  if (!school || !classDetail) {
    return (
      <Screen>
        <Text>Turma não encontrada</Text>
      </Screen>
    );
  }

  function confirmDelete() {
    Alert.alert(
      "Excluir turma",
      "Tem certeza que deseja excluir esta turma?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: handleDelete,
        },
      ]
    );
  }

  return (
    <Screen>
      <VStack flex={1} backgroundColor="$white" px="$6" pt="$10" space="xl">
        <VStack space="xs">
          <Heading size="2xl" color="$blue900" lineHeight="$3xl">
            {isEditing ? "Editar turma" : classDetail.name}
          </Heading>

          <Text color="$textLight600" size="md" fontWeight="$medium">
            {isEditing
              ? "Atualize os dados da turma abaixo"
              : `${classDetail.shift} • Ano ${classDetail.year}`}
          </Text>
        </VStack>

        <VStack flex={1} space="lg">
          {isEditing ? (
            <ClassForm
              name={name}
              shift={shift}
              year={year}
              onChangeName={setName}
              onChangeShift={setShift}
              onChangeYear={setYear}
            />
          ) : (
            <ClassInfoCard data={classDetail} />
          )}

          <VStack space="md" mt="$4">
            {isEditing ? (
              <HStack space="sm">
                <Button
                  flex={1}
                  backgroundColor="$blue600"
                  size="lg"
                  borderRadius="$xl"
                  onPress={handleSave}
                >
                  <ButtonText>Salvar</ButtonText>
                </Button>

                <Button
                  flex={1}
                  variant="outline"
                  borderColor="$blue600"
                  size="lg"
                  borderRadius="$xl"
                  onPress={() => setIsEditing(false)}
                >
                  <ButtonText color="$blue600">Cancelar</ButtonText>
                </Button>
              </HStack>
            ) : (
              <Button
                backgroundColor="$blue600"
                size="lg"
                borderRadius="$xl"
                onPress={() => setIsEditing(true)}
              >
                <ButtonText>Editar turma</ButtonText>
              </Button>
            )}

        
            <Button
              action="negative"
              variant="link"
              onPress={confirmDelete}
              mt="$2"
            >
              <ButtonText color="$red600" size="sm">
                Excluir esta turma
              </ButtonText>
            </Button>

            <Button variant="link" onPress={() => router.back()}>
              <ButtonText color="$textLight400" size="sm">
                Voltar
              </ButtonText>
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </Screen>
  );
}