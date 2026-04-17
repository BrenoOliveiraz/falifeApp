import { createServer, Response } from "miragejs";

export function makeServer() {
  //meu data base inicial
  return createServer({
    seeds(server) {
      server.db.loadData({
        schools: [
          {
            id: "1",
            name: "Escola Padrão",
            address: "Rua Exemplo, 123",
            classes: [],
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      //escolas
      this.get("/schools", (schema) => {
        return schema.db.schools;
      });

      this.post("/schools", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        schema.db.schools.insert(data);

        return data;
      });

   
      this.put("/schools/:id", (schema, request) => {
        const { id } = request.params;
        const data = JSON.parse(request.requestBody);

        const school = schema.db.schools.find(id);
        if (!school) return new Response(404);

        const updated = { ...school, ...data };

        schema.db.schools.update(id, updated);

        return updated;
      });

     
      this.delete("/schools/:id", (schema, request) => {
        const { id } = request.params;

        schema.db.schools.remove(id);

        return { success: true };
      });

      //  CLASSES (mantido)
      this.post("/schools/:schoolId/classes", (schema, request) => {
        const { schoolId } = request.params;
        const data = JSON.parse(request.requestBody);

        const school = schema.db.schools.find(schoolId);
        if (!school) return new Response(404);

        school.classes.push(data);
        schema.db.schools.update(schoolId, school);

        return data;
      });

      this.put("/schools/:schoolId/classes/:classId", (schema, request) => {
        const { schoolId, classId } = request.params;
        const data = JSON.parse(request.requestBody);

        const school = schema.db.schools.find(schoolId);
        if (!school) return new Response(404);

        school.classes = school.classes.map((c: any) =>
          c.id === classId ? { ...c, ...data } : c
        );

        schema.db.schools.update(schoolId, school);

        return data;
      });

      this.delete("/schools/:schoolId/classes/:classId", (schema, request) => {
        const { schoolId, classId } = request.params;

        const school = schema.db.schools.find(schoolId);
        if (!school) return new Response(404);

        school.classes = school.classes.filter(
          (c: any) => c.id !== classId
        );

        schema.db.schools.update(schoolId, school);

        return { success: true };
      });
    },
  });
}