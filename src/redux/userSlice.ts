import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  username: string
  role: string
}

const initialState: UserState = {
  username: "",
  role: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserRole: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username
      state.role = action.payload.role
    },
    resetUser: (state) => {
      state.role = ""
    },
  },
})

export const { updateUserRole, resetUser } = userSlice.actions
export default userSlice.reducer
