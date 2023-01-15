import { GetServerSideProps } from 'next';

export default function Page(props: any) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-5xl font-bold text-gray-600">nextjs-base</div>

      {props.random}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
