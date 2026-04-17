import {
  Button,
  ButtonText,
  Divider,
  VStack,
  Text,
  HStack,
  Icon,
  EditIcon,
  TrashIcon,
  Pressable,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

import Screen from "@/src/components/Screen";
import { SchoolForm } from "@/src/modules/schools/components/SchoolForm";
import { ClassList } from "@/src/modules/schools/components/ClassList";
import { ScreenHeader } from "@/src/components/HeaderScreen";
import { useSchoolDetail } from "@/src/modules/schools/hooks/useSchoolDetail";

export default function SchoolDetail() {
  const router = useRouter();

  const {
    school,
    id,
    isEditing,
    setIsEditing,
    name,
    address,
    setName,
    setAddress,
    handleSave,
    handleDelete,
  } = useSchoolDetail();

  if (!school) {
    return (
      <Screen>
        <Text>Erro: Escola não encontrada</Text>
      </Screen>
    );
  }

  function confirmDelete() {
    Alert.alert(
      "Excluir escola",
      "Tem certeza que deseja excluir esta escola?",
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
      <HStack justifyContent="space-between" alignItems="flex-start" pr="$4">
        <ScreenHeader title={school.name} adress={school.address} />

        {!isEditing && (
          <HStack space="md" mt="$12">
            <Pressable onPress={() => setIsEditing(true)}>
              <Icon as={EditIcon} color="$primary500" size="xl" />
            </Pressable>

            <Pressable onPress={confirmDelete}>
              <Icon as={TrashIcon} color="$error600" size="xl" />
            </Pressable>
          </HStack>
        )}
      </HStack>

      <VStack space="lg" px="$4">
        <Divider />

        {isEditing ? (
          <VStack space="md">
            <SchoolForm
              name={name}
              address={address}
              onChangeName={setName}
              onChangeAddress={setAddress}
            />

            <HStack space="sm">
              <Button flex={1} onPress={handleSave}>
                <ButtonText>Salvar</ButtonText>
              </Button>

              <Button
                flex={1}
                variant="outline"
                action="secondary"
                onPress={() => setIsEditing(false)}
              >
                <ButtonText>Cancelar</ButtonText>
              </Button>
            </HStack>
          </VStack>
        ) : null}

        <HStack justifyContent="space-between" alignItems="center">
          <Text size="lg" fontWeight="$bold" color="$textLight100">
            Turmas
          </Text>

          <Button
            size="md"
            variant="solid"
            onPress={() =>
              router.push({
                pathname: "/class/create-class",
                params: { id },
              })
            }
          >
            <ButtonText color="$white">+ Adicionar</ButtonText>
          </Button>
        </HStack>

        <ClassList classes={school.classes} />
      </VStack>
    </Screen>
  );
}