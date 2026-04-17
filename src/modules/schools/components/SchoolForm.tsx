import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
  Card,
} from "@gluestack-ui/themed";

type Props = {
  name: string;
  address: string;
  onChangeName: (v: string) => void;
  onChangeAddress: (v: string) => void;
};

export function SchoolForm({
  name,
  address,
  onChangeName,
  onChangeAddress,
}: Props) {
  return (
    <Card variant="outline" p="$4" borderRadius="$xl">
      <VStack space="lg">
        <FormControl isRequired>
          <FormControlLabel mb="$1">
            <FormControlLabelText color="$textLight600">
              Nome da escola
            </FormControlLabelText>
          </FormControlLabel>

          <Input variant="outline" size="md">
            <InputField
              value={name}
              onChangeText={onChangeName}
              placeholder="Ex: Escola Municipal Central"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel mb="$1">
            <FormControlLabelText color="$textLight600">
              Endereço
            </FormControlLabelText>
          </FormControlLabel>

          <Input variant="outline" size="md">
            <InputField
              value={address}
              onChangeText={onChangeAddress}
              placeholder="Ex: Rua das Flores, 123"
            />
          </Input>
        </FormControl>
      </VStack>
    </Card>
  );
}