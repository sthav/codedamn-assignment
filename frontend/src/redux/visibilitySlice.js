import { createSlice } from "@reduxjs/toolkit";


export const visibilitySlice = createSlice({
    name: "visibility",
    initialState: {
        sectionVisible: true,
    },
    reducers: {
        toogleSectionVisibility: (state) => {
            state.sectionVisible = !state.sectionVisible;
        },
    },
});

export const { toggleSectionVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;