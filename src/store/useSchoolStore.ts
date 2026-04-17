import { create } from "zustand";

import { School } from "../modules/schools/types/school.types";
import { Class } from "../modules/classes/types/class.types";

import {
  getSchools,
  createSchool,
  updateSchoolApi,
  deleteSchoolApi,
} from "../modules/schools/api/schools.api";

import {
  createClass,
  updateClassApi,
  deleteClassApi,
} from "../modules/classes/api/classes.api";

type State = {
  schools: School[];

  fetchSchools: () => Promise<void>;
  addSchool: (school: School) => Promise<void>;
  updateSchool: (schoolId: string, data: Partial<School>) => Promise<void>;
  removeSchool: (schoolId: string) => Promise<void>;

  addClass: (schoolId: string, classItem: Class) => Promise<void>;
  updateClass: (
    schoolId: string,
    classId: string,
    data: Partial<Class>
  ) => Promise<void>;
  removeClass: (schoolId: string, classId: string) => Promise<void>;
};

export const useSchoolStore = create<State>((set, get) => ({
  schools: [],

  fetchSchools: async () => {
    const data = await getSchools();
    set({ schools: data });
  },

  addSchool: async (school) => {
    await createSchool(school);
    await get().fetchSchools();
  },

  updateSchool: async (schoolId, data) => {
    await updateSchoolApi(schoolId, data);
    await get().fetchSchools();
  },

  removeSchool: async (schoolId) => {
    await deleteSchoolApi(schoolId);
    await get().fetchSchools();
  },

  addClass: async (schoolId, classItem) => {
    await createClass(schoolId, classItem);
    await get().fetchSchools();
  },

  updateClass: async (schoolId, classId, data) => {
    await updateClassApi(schoolId, classId, data);
    await get().fetchSchools();
  },

  removeClass: async (schoolId, classId) => {
    await deleteClassApi(schoolId, classId);
    await get().fetchSchools();
  },
}));