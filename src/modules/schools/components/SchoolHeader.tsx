import { Heading, Text, VStack } from "@gluestack-ui/themed";

export function SchoolHeader({
  name,
  address,
}: {
  name: string;
  address: string;
}) {
  return (
    <VStack space="xs" py="$2">
      <Heading size="2xl" lineHeight="$2xl">
        {name}
      </Heading>

      <Text color="$textLight500" size="sm">
        {address}
      </Text>
    </VStack>
  );
}