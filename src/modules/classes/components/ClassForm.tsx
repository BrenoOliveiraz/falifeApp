import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import { Class } from "../types/class.types";
import { ShiftSelector } from "./ShiftSelector";


type Props = {
  name: string;
  shift: Class["shift"] | "";
  year: string;
  onChangeName: (v: string) => void;
  onChangeShift: (v: Class["shift"]) => void;
  onChangeYear: (v: string) => void;
};

export function ClassForm({
  name,
  shift,
  year,
  onChangeName,
  onChangeShift,
  onChangeYear,
}: Props) {
  return (
    <VStack space="xl">
      <Text color="$textLight900" bold size="lg">
        Dados da turma
      </Text>

      <FormControl isRequired>
        <FormControlLabel mb="$1">
          <FormControlLabelText color="$textLight800">
            Nome da turma
          </FormControlLabelText>
        </FormControlLabel>

        <Input variant="outline" size="md" borderColor="$textLight300" borderRadius="$lg">
          <InputField
            color="$textLight900"
            value={name}
            onChangeText={onChangeName}
            placeholder="Ex: 9º Ano A"
            placeholderTextColor="$textLight400"
          />
        </Input>
      </FormControl>

      <FormControl isRequired>
        <FormControlLabel mb="$1">
          <FormControlLabelText color="$textLight800">
            Turno
          </FormControlLabelText>
        </FormControlLabel>

        <ShiftSelector value={shift} onChange={onChangeShift} />
      </FormControl>

      <FormControl isRequired>
        <FormControlLabel mb="$1">
          <FormControlLabelText color="$textLight800">
            Ano letivo
          </FormControlLabelText>
        </FormControlLabel>

        <Input variant="outline" size="md" borderColor="$textLight300" borderRadius="$lg">
          <InputField
            color="$textLight900"
            value={year}
            onChangeText={onChangeYear}
            placeholder="Ex: 2026"
            keyboardType="numeric"
            placeholderTextColor="$textLight400"
          />
        </Input>
      </FormControl>
    </VStack>
  );
}