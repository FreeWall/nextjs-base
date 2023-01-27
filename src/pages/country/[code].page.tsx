import { CountryServer2Query } from '.gql/graphql';
import { apolloClient, gql } from '@/utils/apollo';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Image from 'next/image';

interface Props {
  country: CountryServer2Query['country'];
}

export default function Page(props: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-10 text-5xl font-bold text-gray-600">
        <Image
          src={
            'https://flagcdn.com/w40/' +
            props.country?.code.toLowerCase() +
            '.png'
          }
          alt={props.country?.code}
          width={40}
          height={27}
          quality={90}
        />
        <span className="ml-4">{props.country?.name}</span>
      </div>
      <div className="max-w-md text-center text-lg font-medium leading-8 text-gray-600">
        Code: {props.country?.code}
        <br />
        Currency: {props.country?.currency}
        <br />
        Capital: {props.country?.capital}
        <br />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const code = ctx?.params?.code;

  const query = apolloClient.query({
    query: gql(`
      query CountryServer2($code: ID!) {
        country(code: $code) {
          code
          name
          phone
          capital
          currency
          languages {
            code
          }
          native
          emoji
        },
      }
    `),
    variables: {
      code: code as string,
    },
  });

  return {
    props: {
      country: (await query).data.country,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = apolloClient.query({
    query: gql(`
      query CountriesServer2 {
        countries(filter: {
          continent: {
            eq: "EU"
          }
        }) {
          code
        }
      }
    `),
  });

  const codes: GetStaticPathsResult['paths'] = [];
  (await query).data.countries.map((country) => {
    codes.push({ params: { code: country.code } });
  });

  return {
    paths: codes,
    fallback: 'blocking',
  };
};
