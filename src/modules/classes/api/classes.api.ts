
export async function createClass(schoolId: string, classItem: any) {
  const response = await fetch(`/api/schools/${schoolId}/classes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classItem),
  });

  return response.json();
}

export async function updateClassApi(
  schoolId: string,
  classId: string,
  data: any
) {
  const response = await fetch(
    `/api/schools/${schoolId}/classes/${classId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return response.json();
}

export async function deleteClassApi(
  schoolId: string,
  classId: string
) {
  await fetch(`/api/schools/${schoolId}/classes/${classId}`, {
    method: "DELETE",
  });
}