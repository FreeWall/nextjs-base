import { HomePageDocument } from '@/graphql/HomePage.gql';
import PageBuilder from '@/pagebuilder/pagebuilder';
import { useQuery } from '@apollo/client';
import { GetServerSideProps } from 'next';

export default function Page() {
  const homepage = useQuery(HomePageDocument);

  if (!homepage.data?.cmsPage?.content) {
    return;
  }

  console.log(homepage.data?.cmsPage?.content);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-12 text-5xl font-bold text-gray-600">banner</div>
      <PageBuilder
        html={homepage.data?.cmsPage?.content}
        classes={{ root: 'bagr' }}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
