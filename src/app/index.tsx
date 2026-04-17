import {
  Button,
  ButtonText,
  VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import { School } from "../modules/schools/types/school.types";
import { useSchoolStore } from "../store/useSchoolStore";
import { Header } from "../components/MainHeader";
import { SchoolSearchInput } from "../components/SchoolSearchInput";
import { SchoolCard } from "../modules/schools/components/SchoolCard";
import Screen from "../components/Screen";

export default function Home() {
  const router = useRouter();
  const schools = useSchoolStore((state) => state.schools);
  const fetchSchools = useSchoolStore((state) => state.fetchSchools);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  const filteredSchools = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return schools;

    return schools.filter((school) =>
      school.name.toLowerCase().includes(query)
    );
  }, [schools, search]);

  return (
    <Screen>

      <VStack flex={1}>


        <VStack space="lg" pb="$4">
          <Header />
          <VStack px="$4" space="md">
            <SchoolSearchInput value={search} onChange={setSearch} />
            <Button
              onPress={() => router.push("/school/create")}
              backgroundColor="$blue600"
            >
              <ButtonText>Nova Escola</ButtonText>
            </Button>
          </VStack>
        </VStack>


        <FlatList<School>
          data={filteredSchools}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 16, marginBottom: 12 }}>
              <SchoolCard school={item} />
            </View>
          )}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
          showsVerticalScrollIndicator={true}
        />

      </VStack>
    </Screen>
  );
}