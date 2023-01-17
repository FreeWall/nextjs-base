import { createYoga } from 'graphql-yoga';
import { NextApiRequest, NextApiResponse } from 'next';
import { getBuiltMesh } from '../../../.mesh';

let serverHandler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const getYogaServerHandler = async () => {
  if (!serverHandler) {
    const mesh = await getBuiltMesh();

    serverHandler = createYoga({
      plugins: [...mesh.plugins],
      graphqlEndpoint: '/api/graphql',
      schema: mesh.schema,
      maskedErrors: false,
      parserCache: false,
      validationCache: false,
      logging: mesh.logger,
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
