import { Input, InputField } from "@gluestack-ui/themed";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export function SchoolSearchInput({ value, onChange }: Props) {
  return (
    <Input>
      <InputField
      color="$white"
        placeholder="Buscar escola..."
        value={value}
        onChangeText={onChange}
      />
    </Input>
  );
}