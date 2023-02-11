import { getBuiltMesh } from '.mesh';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { createSchema, createYoga } from 'graphql-yoga';
import { NextApiRequest, NextApiResponse } from 'next';
let serverHandler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const getYogaServerHandler = async () => {
  if (!serverHandler) {
    //const typeDefs = readFileSync('./.gql/schema.graphql', 'utf8');
    const typeDefs = await loadSchema('./.gql/schema.graphql', {
      loaders: [new GraphQLFileLoader()],
    });

    const schema = createSchema({ typeDefs }) as any;

    const mesh = await getBuiltMesh();

    console.dir(mesh.schema);

    serverHandler = createYoga({
      //plugins: [...mesh.plugins],
      graphqlEndpoint: '/api/graphql',
      schema: schema,
      maskedErrors: false,
      parserCache: false,
      validationCache: false,
    });
  }

  return serverHandler;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return (await getYogaServerHandler())(req, res);
}
