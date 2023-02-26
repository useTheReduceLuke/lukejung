
import { create } from 'zustand';
import { isEqual } from "lodash";

type GravityType = "center" | "reverse" | "down" | "up" | "left" | "right";
const gravityOptions: GravityType[] = [ "center", "reverse", "down", "up", "left", "right" ];

type themeOption = { name: string, icon: string };
const themeOptions: themeOption[] = [
    { name: "night", icon: "moon" },
    { name: "day", icon: "sun" },
];

export interface StateType {
    theme: themeOption,
    advanceTheme: () => void,
    gravity: GravityType,
    advanceGravity: () => void,
    sidenavExpanded: boolean,
    toggleSidenav: () => void,
}

const advanceOptions = (state: any, name: string, options: Array<any>) => {
    const active = state[ name ];
    const oldIndex = options.findIndex(x => isEqual(active, x));
    const newIndex = (oldIndex >= (options.length - 1)) ? 0 : oldIndex + 1;
    return { [ name ]: options[ newIndex ] } ?? options[ 0 ];
};

const toggleState = (state: any, name: string) => {
    const active = state[ name ];
    return { [ name ]: !active };
};

export const useStateStore = create<StateType>((set) => ({
    theme:                  themeOptions[ 0 ],
    gravity:                gravityOptions[ 0 ],
    sidenavExpanded:        false,
    advanceTheme:
        () => set((state: StateType) =>
            advanceOptions(state, "theme", themeOptions)),
    advanceGravity:
        () => set((state: StateType) =>
            advanceOptions(state, "gravity", gravityOptions)),
    toggleSidenav:
        () => set((state: StateType) =>
            toggleState(state, "sidenavExpanded")),
}));
