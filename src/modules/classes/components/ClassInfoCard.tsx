import { Card, HStack, Text, VStack } from "@gluestack-ui/themed";
import { Class } from "../types/class.types";

export function ClassInfoCard({ data }: { data: Class }) {
  return (
    <Card variant="outline" p="$4" borderRadius="$xl">
      <VStack space="md">
        <Text bold size="lg">
          Informações da turma
        </Text>

        <VStack space="sm">
          <HStack justifyContent="space-between">
            <Text color="$textLight500">Nome</Text>
            <Text bold>{data.name}</Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text color="$textLight500">Turno</Text>
            <Text bold>{data.shift}</Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text color="$textLight500">Ano</Text>
            <Text bold>{data.year}</Text>
          </HStack>
        </VStack>
      </VStack>
    </Card>
  );
}