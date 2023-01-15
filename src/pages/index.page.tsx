import { trpc } from '@/utils/trpc';
import { GetServerSideProps } from 'next';

export default function Page() {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-2 text-5xl font-bold text-gray-600">nextjs-base</div>
      <div className="text-2xl text-gray-400">
        {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
