export async function getSchools() {
  const response = await fetch("/api/schools");

  if (!response.ok) {
    throw new Error("Erro ao buscar escolas");
  }

  return response.json();
}

export async function createSchool(school: any) {
  const response = await fetch("/api/schools", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(school),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar escola");
  }

  return response.json();
}

export async function updateSchoolApi(
  schoolId: string,
  data: any
) {
  const response = await fetch(`/api/schools/${schoolId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar escola");
  }

  return response.json();
}

export async function deleteSchoolApi(schoolId: string) {
  const response = await fetch(`/api/schools/${schoolId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar escola");
  }
}