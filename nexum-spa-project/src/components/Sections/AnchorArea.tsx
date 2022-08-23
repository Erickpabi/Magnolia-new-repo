import { EditableArea } from "@magnolia/react-editor";
import type { AuthorPageProps } from "@/types/page-helper-types";
import React from "react";

const AnchorArea: React.FC<AuthorPageProps> = (props) => {
  return (
      <div className="">
          <div className="bg-red-500 text-lg text-white pl-3 h-10 flex items-center font-bold">
              {props.title}
          </div>
          {props["anchorAreaItems"] && (
              <EditableArea
                  className="odd:bg-[#363636] even:bg-[#2f2f2f]"
                  key="Area"
                  parentTemplateId={props.metadata["mgnl:template"]}
                  content={props["anchorAreaItems"]}
              />
          )}
      </div>
  );
};

export default AnchorArea;

//TODO: EditableArea - Add properties to TS-file
