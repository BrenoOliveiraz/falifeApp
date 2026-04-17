import { useRouter } from "expo-router";
import { useState } from "react";
import uuid from "react-native-uuid";

import { useSchoolStore } from "@/src/store/useSchoolStore";

export function useCreateClass(schoolId: string) {
  const router = useRouter();
  const addClass = useSchoolStore((s) => s.addClass);

  const [name, setName] = useState("");
  const [shift, setShift] = useState("");
  const [year, setYear] = useState("");

  async function handleCreate() {
    if (!name || !shift || !year) return;

    await addClass(schoolId, {
      id: String(uuid.v4()),
      name,
      shift,
      year,
    });

    router.back();
  }

  return {
    name,
    shift,
    year,
    setName,
    setShift,
    setYear,
    handleCreate,
  };
}