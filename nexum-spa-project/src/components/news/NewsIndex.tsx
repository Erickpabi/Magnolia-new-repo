import React from "react";

import type { AuthorPageProps } from "@/types/page-helper-types";
import Head from "next/head";
import Layout from "@/components/layouts/Layout";
import { EditableArea } from "@magnolia/react-editor";

function NewsIndex({ title, ...props }: AuthorPageProps) {
  return (
    <div className=" ">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>

      <Layout>
        <div>
          <section>
            {props["header"] && (
                <EditableArea key="Area" content={props["header"]} />
            )}
          </section>
        </div>
        <div className="Basic container mr-auto ml-auto">
          <section>
            {props["featured"] && (
              <EditableArea
                key="Area"
                content={props["featured"]}
                className="flex flex-wrap"
              />
            )}
          </section>
          <div className="h-5" />
          <section>
            {props["main"] && (
              <EditableArea key="Area" content={props["main"]} />
            )}
          </section>
          <div className="h-5" />

          <section className="Press">
            <section>
              {props["footer"] && (
                <EditableArea key="Area" content={props["footer"]} />
              )}
            </section>
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default NewsIndex;
