import { EditableArea } from "@magnolia/react-editor";
import type { AuthorPageProps } from "@/types/page-helper-types";

const QuickLinksArea: React.FC<AuthorPageProps> = (props) => {
  return (
    <div>
      <div className="mb-4 uppercase font-bold underline underline-offset-8">
        Quick Links
      </div>
      {props["quickLinksAreaItems"] && (
        <EditableArea
          className="grid grid-cols-2 md:grid-cols-3 md:gap-2"
          key="Area"
          parentTemplateId={props.metadata["mgnl:template"]}
          content={props["quickLinksAreaItems"]}
        />
      )}
    </div>
  );
};

export default QuickLinksArea;
