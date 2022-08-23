import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import Head from "next/head";
import AnchorLinks from "@/components/common/AnchorLinks";

import Layout from "@/components/layouts/Layout";
import type { AuthorPageProps } from "@/types/page-helper-types";

function Homepage({ title, ...props }: AuthorPageProps) {
  const anchorSection = props["section"] ? props["section"] : null
  const anchorList: any[] = []
  if(anchorSection !== null){
    anchorSection['@nodes'].map(node => {
      anchorList.push(anchorSection[node])
    })
  }

  console.log(anchorList)
  return (
    <div className="">
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
        <div className="Basic mr-auto ml-auto container">
          <section>
            {props["main"] && (
              <EditableArea key="Area" content={props["main"]} />
            )}
          </section>
          <div className="" />

          <div className="grid grid-cols-4 gap-2">
            <div className="anchorLinks">
              <section>
                {props["anchorLinks"] && (
                    <EditableArea key="Area" content={props["anchorLinks"]} />
                )}
              </section>
            </div>
            <div className="col-span-3">
              <section className="News">
                <section>
                  {props["news"] && (
                      <EditableArea key="Area" content={props["news"]} />
                  )}
                </section>
              </section>
              <div className="" />

              <section className="Press">
                <section>
                  {props["press"] && (
                      <EditableArea key="Area" content={props["press"]} />
                  )}
                </section>
              </section>
              <div className="" />
              <section className="section">
                <section>
                  {props["section"] && (
                      <EditableArea key="Area" content={props["section"]} />
                  )}
                </section>
              </section>
            </div>
          </div>

          <section className="Footer">
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
export default Homepage;
