import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from '../schemas/User';
import 'dotenv/config';

const databaseUrl =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

// sessions
const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // how long should the user stay signed in? seconds/hours/days/years
    secret: process.env.COOKIE_SECRET,
};

export default config({
    // @ts-ignore
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseUrl,
        // todo add data seeing here
    },
    lists: createSchema({
        // schema items go in here
        User,
    }),
    ui: {
        // todo change this for rolls
        isAccessAllowed: () => true,
    },
    // todo add session values here
});
