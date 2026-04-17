import { Card, Text, VStack, Pressable, HStack } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";

export function ClassList({ classes }: any) {
  const router = useRouter();

  if (!classes?.length) {
    return (
      <Text color="$textLight500">
        Nenhuma turma cadastrada ainda
      </Text>
    );
  }

  return (
    <VStack space="sm">
      {classes.map((c: any) => (
        <Pressable
          key={c.id}
          onPress={() =>
            router.push({
              pathname: "/class/[id]",
              params: { id: c.id },
            })
          }
        >
          <Card variant="outline" p="$3" borderRadius="$lg">
            <VStack space="xs">
              <Text  color="$textLight100" bold>{c.name}</Text>

              <Text size="sm" color="$textLight100">
                {c.shift} • {c.year}
              </Text>
            </VStack>
          </Card>
        </Pressable>
      ))}
    </VStack>
  );
}