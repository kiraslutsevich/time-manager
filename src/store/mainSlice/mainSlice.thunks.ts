import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from "../../types/mainTypes";
import authApi from '../../api/authApi';
import cookies from '../../utils/cookies';

const authorize = createAsyncThunk<IUser | null>(
  'main/authorizeUser',
  async () => {
    const accessToken = cookies.access.get();
    if (!accessToken) {
      return null;
    }

    const user = await authApi.getMe();

    return user.data.payload;
  },
);

const mainThunks = {
  authorize,
};

export default mainThunks;
