import dotenv from 'dotenv';

dotenv.config(); 

// To be accessible across app
const config = {}; 

config.port = process.env.PORT || '5000';

config.db_username = process.env.DB_USERNAME || 'username';
config.db_password = process.env.DB_PASSWORD || 'password';

export default config;
