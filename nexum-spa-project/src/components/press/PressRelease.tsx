import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import type { AuthorPageProps } from "@/types/page-helper-types";
import Head from "next/head";
import Layout from "@/components/layouts/Layout";

const PressRelease: React.FC<AuthorPageProps> = (props) => {
    console.log(props)
  return (
    <div className="">
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.title} />
        </Head>
        <Layout>
            <section>
                {props["header"] && (
                    <EditableArea key="Area" content={props["header"]} />
                )}
            </section>
    <div className="Basic mr-auto ml-auto container">
      <section>
        {props["main"] && <EditableArea key="Area" content={props["main"]} />}
      </section>

      <section>
        {props["footer"] && (
          <EditableArea key="Area" content={props["footer"]} />
        )}
      </section>
    </div>
        </Layout>

    </div>
  );
};

export default PressRelease;
