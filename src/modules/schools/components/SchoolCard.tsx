import { useRouter } from "expo-router";
import {
  Card,
  Text,
  VStack,
  HStack,
  Pressable,
  Badge,
  BadgeText,
} from "@gluestack-ui/themed";

type Props = {
  school: {
    id: string;
    name: string;
    address: string;
    classes?: any[];
  };
};

export function SchoolCard({ school }: Props) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(`/school/${school.id}`)}>
      <Card
        p="$5"
        mb="$4"
        bg="$white"
        borderRadius="$2xl"
        style={{
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
        }}
      >
        <VStack space="xs">
          <Text bold size="xl" color="$blue900">
            {school.name}
          </Text>

          <Text color="$textLight500" size="sm">
            {school.address}
          </Text>

          <HStack mt="$3">
            <Badge action="info" variant="outline" borderRadius="$full" borderColor="$blue300">
              <BadgeText color="$blue600" textTransform="lowercase">
                {(school.classes?.length ?? 0)} turmas
              </BadgeText>
            </Badge>
          </HStack>
        </VStack>
      </Card>
    </Pressable>
  );
}