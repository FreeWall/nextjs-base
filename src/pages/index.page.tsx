import { CountriesDocument } from '@/graphql/Countries.gql';
import { apolloClient, gql } from '@/utils/apollo';
import { trpc } from '@/utils/trpc';
import { useQuery } from '@apollo/client';
import shuffle from 'lodash/shuffle';
import slice from 'lodash/slice';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

const techs = [
  { name: 'Next.js', link: 'https://nextjs.org/' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'React Intl', link: 'https://formatjs.io/docs/react-intl/' },
  { name: 'tRPC', link: 'https://trpc.io/' },
  { name: 'GraphQL', link: 'https://graphql.org/' },
  { name: 'GraphQL Mesh', link: 'https://the-guild.dev/graphql/mesh' },
  { name: 'Apollo Client', link: 'https://www.apollographql.com/docs/react/' },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
];

export default function Page() {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });
  const countries = useQuery(CountriesDocument);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-12 text-5xl font-bold text-gray-600">nextjs-base</div>
      <div className="w-72 rounded bg-slate-100 p-2 py-[6px]">
        <div className="text-sm text-gray-500">tRPC request:</div>
        <div className="font-medium text-gray-600">
          {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
        </div>
      </div>
      <div className="mt-4 w-72 rounded bg-slate-100 p-2 py-[6px]">
        <div className="text-sm text-gray-500">GraphQL request:</div>
        <div className="font-medium text-gray-600">
          {countries.data ? (
            <>
              <span>EU countries: </span>
              {slice(
                shuffle(
                  countries.data?.countries.map((country) => country.code),
                ),
                0,
                5,
              ).map((code) => (
                <span key={code}>
                  <Link
                    href={'country/' + code}
                    key={code}
                    prefetch={false}
                  >
                    <a className="mr-2">
                      <Image
                        src={
                          'https://flagcdn.com/w20/' +
                          code.toLowerCase() +
                          '.png'
                        }
                        alt={code}
                        width={20}
                        height={13}
                        quality={90}
                        className="inline"
                      />
                    </a>
                  </Link>
                </span>
              ))}
            </>
          ) : (
            'Loading GraphQL query...'
          )}
        </div>
      </div>
      <div className="mt-4 w-72 rounded bg-slate-100 p-2 py-[6px]">
        <div className="text-sm text-gray-500">Translation:</div>
        <div className="font-medium text-gray-600">
          <FormattedMessage
            id="translation.myname"
            values={{ name: 'FreeWall' }}
          />
        </div>
      </div>
      <div className="mt-12 w-[500px] text-center text-lg font-medium leading-8 text-gray-600">
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
      query CountryServer {
        country(code: "CZ") {
          name
        }
      }
    `),
  });

  console.log('GraphQL server response: ' + (await query).data.country?.name);

  return {
    props: {},
  };
};
