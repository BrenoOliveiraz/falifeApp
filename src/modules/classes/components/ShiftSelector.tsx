import { Button, ButtonText, HStack } from "@gluestack-ui/themed";
import { Class } from "../types/class.types";


type Props = {
  value: Class["shift"] | "";
  onChange: (value: Class["shift"]) => void;
};

export function ShiftSelector({ value, onChange }: Props) {
  const shifts: Class["shift"][] = ["Manhã", "Tarde", "Noite"];

  return (
    <HStack space="sm" mt="$1">
      {shifts.map((s) => {
        const isActive = value === s;
        return (
          <Button
            key={s}
            flex={1}
            size="sm"
            variant="solid"
            action={isActive ? "primary" : "secondary"}
            backgroundColor={isActive ? "$blue600" : "$secondary100"}
            onPress={() => onChange(s)}
            borderRadius="$lg"
          >
            <ButtonText color={isActive ? "$white" : "$textLight600"}>
              {s}
            </ButtonText>
          </Button>
        );
      })}
    </HStack>
  );
}