import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import superjson from 'superjson';

export async function createContext(opts: CreateNextContextOptions) {
  return {
    req: opts.req,
    res: opts.res,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

/* // for session (authorized) procedures
export const procedure = t.procedure.use(
  t.middleware(async ({ ctx, next }) => {
    if (!ctx.session.crs) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return next();
  }),
); */
