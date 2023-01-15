import example from './routers/example';
import { router } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /server/api/routers should be manually added here
 */
export const trpcRouter = router({
  example: example,
});

export type TrpcRouter = typeof trpcRouter;
