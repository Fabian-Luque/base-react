import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
    user: { name: string, email: string }; // TODO: centralize this
    setUser: (user: { name: string, email: string }) => void;
    clearUser: () => void;
};

const useUserStore = create<UserState>(
    persist(
        (set) => ({
            user: { name: '', email: 0 },
            setUser: (user: { name: string, email: string }) => {
                console.log(user)
                set({ user });
            },
            clearUser: () => {
                set({ user: { name: '', email: 0 } });
            }
        }),
        { name: 'user-store' }
    )
)

export default useUserStore;