import { UserDto } from '~/constant';
import * as request from '~/utils/request';

export const search = async (q: string, type = 'less'): Promise<UserDto[]> => {
  try {
    const res = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });

    if (res.data) {
      return res.data as UserDto[];
    }

    return [];
  } catch (error) {
    throw error;
  }
};
