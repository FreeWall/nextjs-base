import { CompanyDocument } from '@/graphql/Company.gql';
import { apolloClient, gql } from '@/utils/apollo';
import { trpc } from '@/utils/trpc';
import { useQuery } from '@apollo/client';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const techs = [
  { name: 'Next.js', link: 'https://nextjs.org/' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'tRPC', link: 'https://trpc.io/' },
  { name: 'GraphQL', link: 'https://graphql.org/' },
  { name: 'GraphQL Mesh', link: 'https://the-guild.dev/graphql/mesh' },
  { name: 'Apollo Client', link: 'https://www.apollographql.com/docs/react/' },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
];

export default function Page() {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });
  const company = useQuery(CompanyDocument);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-10 text-5xl font-bold text-gray-600">nextjs-base</div>
      <div className="text-2xl text-gray-400">
        {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
      </div>
      <div className="text-2xl text-gray-400">
        {company.data
          ? 'GraphQL ' +
            company.data.company?.name +
            ' by ' +
            company.data.company?.ceo
          : 'Loading GraphQL query...'}
      </div>
      <div className="mt-20 max-w-md text-center text-lg font-medium leading-8 text-gray-600">
        {techs.map((tech, key) => (
          <div
            key={key}
            className="mx-2 inline-block"
          >
            <Link href={tech.link}>
              <a
                target="_blank"
                className="p-1"
              >
                {tech.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = apolloClient.query({
    query: gql(`
      query CompanyServer {
        company {
          name
        }
      }
    `),
  });

  console.log('GraphQL server response: ' + (await query).data.company?.name);

  return {
    props: {},
  };
};
