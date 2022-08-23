import { EditablePage } from "@magnolia/react-editor";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { PageLoading } from "@/components/loader/PageLoader";
import { config } from "@/page-config";
import type { AuthorProps } from "@/types/page-helper-types";
import deliveryEndpointService from "@/services/delivery_endpoint_service";

const PageFactory: NextPage<AuthorProps> = ({
  pageContent,
  templateAnnotations,
}) => {
  const router = useRouter();

  if (router.isFallback || !pageContent || !templateAnnotations)
    return <PageLoading />;
  return (
    <EditablePage
      config={config}
      content={pageContent}
      templateAnnotations={templateAnnotations}
    />
  );
};

export const getStaticPaths: GetStaticPaths<{}> = () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps<AuthorProps> = async ({
  params,
}) => {
  try {
    let newParams: string[] = [];

    if (params && params["pathname"]) {
      newParams = (params["pathname"] as string[]).filter(
        (arr) => arr !== "homepage"
      );
    }

    let path = "";
    if (newParams.length > 0) {
      path = newParams.join("/");
    }

    // { pageContent, templateAnnotations }
    const pageProps =
      await deliveryEndpointService.getAuthorPageData(path);
    if(pageProps){
      console.log('Page props', pageProps)
      return {
        props: {
            ...pageProps
        },
        revalidate: 1,
      };
    }

      return {
        notFound: true,
        revalidate: 1,
      };


  } catch (error) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }
};

export default PageFactory;
