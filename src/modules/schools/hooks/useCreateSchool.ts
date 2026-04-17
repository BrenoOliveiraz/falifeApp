import { useState } from "react";
import { useRouter } from "expo-router";
import uuid from "react-native-uuid";
import { useSchoolStore } from "@/src/store/useSchoolStore";

export function useCreateSchool() {
  const router = useRouter();
  const addSchool = useSchoolStore((s) => s.addSchool);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function handleCreate() {
    if (!name || !address) return;

    addSchool({
      id: String(uuid.v4()),
      name,
      address,
      classes: [],
    });

    router.back();
  }

  return {
    name,
    address,
    setName,
    setAddress,
    handleCreate,
  };
}