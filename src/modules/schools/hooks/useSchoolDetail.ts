import { useLocalSearchParams, useRouter } from "expo-router";
import { useSchoolStore } from "@/src/store/useSchoolStore";
import { useState } from "react";

export function useSchoolDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const schools = useSchoolStore((s) => s.schools);
  const updateSchool = useSchoolStore((s) => s.updateSchool);
  const removeSchool = useSchoolStore((s) => s.removeSchool);

  const school = schools.find((s) => s.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(school?.name || "");
  const [address, setAddress] = useState(school?.address || "");

  async function handleSave() {
    if (!school) return;

    await updateSchool(school.id, {
      name,
      address,
    });

    setIsEditing(false);
  }

  async function handleDelete() {
    if (!school) return;

    await removeSchool(school.id);
    router.back();
  }

  return {
    id,
    school,
    isEditing,
    setIsEditing,
    name,
    address,
    setName,
    setAddress,
    handleSave,
    handleDelete,
  };
}