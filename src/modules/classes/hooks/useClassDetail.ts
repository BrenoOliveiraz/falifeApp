import { useState } from "react";
import { useRouter } from "expo-router";
import { useSchoolStore } from "@/src/store/useSchoolStore";

export function useClassDetail(classId: string) {
  const router = useRouter();

  const schools = useSchoolStore((s) => s.schools);
  const updateClass = useSchoolStore((s) => s.updateClass);
  const removeClass = useSchoolStore((s) => s.removeClass);

  const school = schools.find((school) =>
    school.classes.some((c) => c.id === classId)
  );

  const classDetail = school?.classes.find((c) => c.id === classId);

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(classDetail?.name || "");
  const [shift, setShift] = useState(classDetail?.shift || "");
  const [year, setYear] = useState(classDetail?.year || "");

  async function handleSave() {
    if (!school || !classDetail) return;

    await updateClass(school.id, classDetail.id, {
      name,
      shift,
      year,
    });

    setIsEditing(false);
  }

  async function handleDelete() {
    if (!school || !classDetail) return;

    await removeClass(school.id, classDetail.id);
    router.back();
  }

  return {
    school,
    classDetail,
    isEditing,
    setIsEditing,
    name,
    shift,
    year,
    setName,
    setShift,
    setYear,
    handleSave,
    handleDelete,
  };
}