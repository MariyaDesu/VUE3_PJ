// src/store/userStore.ts

// 导入并使用 defineStore 来定义 store
import { defineStore } from "pinia";

interface UserState {
    username: string;
    password: string;
    role: string;
}

export const useUserStore = defineStore("user", {
    state: (): UserState => {
        return {
            username: "Amy",
            password:'123456',
            role:'admin'
        };
    },
    getters: {
        // ...
    },
    actions: {
        // ...
    },
});