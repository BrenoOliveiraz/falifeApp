# 📱 Falife App

Aplicação mobile desenvolvida com **React Native (Expo)** para gerenciamento de escolas e turmas, utilizando **MirageJS** como mock de API e **Zustand** para gerenciamento de estado.

---

## 🚀 Tecnologias Utilizadas

### 🧩 Core

* **Node.js**: >= 18.x
* **Expo**: ~54.0.33
* **React**: 19.1.0
* **React Native**: 0.81.5
* **TypeScript**: ~5.9.2

### 📦 Principais Bibliotecas

* **expo-router**: ~6.0.23 (roteamento)
* **zustand**: ^5.0.12 (estado global)
* **@tanstack/react-query**: ^5.99.0 (data fetching - opcional no projeto)
* **miragejs**: ^0.1.48 (mock de API)
* **@gluestack-ui/themed**: ^1.1.73 (UI)

---

## 📂 Estrutura do Projeto (resumo)

```
src/
 ├── components/
 ├── modules/
 │    ├── schools/
 │    └── classes/
 ├── services/
 │    ├── api/
 │    └── mirage/
 ├── store/
 └── hooks/
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone <repo-url>
cd falifeapp
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o projeto

```bash
npx expo start
```

Depois disso, você pode rodar:

### 📱 Android

```bash
npx expo start --android
```

### 🍎 iOS

```bash
npx expo start --ios
```

### 🌐 Web

```bash
npx expo start --web
```

---

## 🧪 Mock de Back-end (MirageJS)

O projeto utiliza **MirageJS** para simular uma API REST.

### ▶️ Como funciona

* O servidor é iniciado automaticamente em ambiente de desenvolvimento (`__DEV__`)
* Local: `src/services/mirage/server.ts`

### 🔌 Endpoints disponíveis

#### 🏫 Schools

* `GET /api/schools`
* `POST /api/schools`
* `PUT /api/schools/:id`
* `DELETE /api/schools/:id`

#### 📚 Classes

* `POST /api/schools/:schoolId/classes`
* `PUT /api/schools/:schoolId/classes/:classId`
* `DELETE /api/schools/:schoolId/classes/:classId`

### 🌱 Dados iniciais (seed)

O Mirage já inicia com dados mockados via `seeds()`:

```ts
schools: [
  {
    id: "1",
    name: "Escola Padrão",
    address: "Rua Exemplo, 123",
    classes: []
  }
]
```

---

## 🔄 Fluxo de dados

A aplicação segue o padrão:

```
UI → API (Mirage) → Zustand → UI
```

* A API (Mirage) é a **fonte da verdade**
* Zustand atua como **cache local**
* Após qualquer mutação (create/update/delete), é feito **refetch dos dados**

---

## ✨ Funcionalidades

* ✅ Listagem de escolas
* ✅ Criação de escola
* ✅ Edição de escola
* ✅ Exclusão de escola
* ✅ Listagem de turmas
* ✅ Criação de turma
* ✅ Edição de turma
* ✅ Exclusão de turma

---

## 🧠 Decisões técnicas

* Uso de **MirageJS** para simular backend sem dependência externa
* Separação clara entre:

  * API (`services/api`)
  * Estado (`store`)
  * UI (`components`)
* Uso de **refetch após mutações** para garantir consistência dos dados

---

## 👨‍💻 Autor

Desenvolvido por **Breno Oliveira**
