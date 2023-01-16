import { trpc } from '@/utils/trpc';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const techs = [
  { name: 'Next.js', link: 'https://nextjs.org/' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'tRPC', link: 'https://trpc.io/' },
  { name: 'GraphQL', link: 'https://graphql.org/' },
  { name: 'Apollo Client', link: 'https://www.apollographql.com/docs/react/' },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
];

export default function Page() {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-4 text-5xl font-bold text-gray-600">nextjs-base</div>
      <div className="text-2xl text-gray-400">
        {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
      </div>
      <div className="mt-20 text-lg font-medium text-gray-600">
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
  return {
    props: {},
  };
};
