import '../libs/utils/dotenv';

import { get } from 'env-var';

export const databaseConfig = {
  url: get('DATABASE_URL').required().asString(),
};
