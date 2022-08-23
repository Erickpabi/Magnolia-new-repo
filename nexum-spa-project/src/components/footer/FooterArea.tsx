import { EditableArea } from "@magnolia/react-editor";
import type { AuthorPageProps } from "@/types/page-helper-types";
import Footer from "@/components/footer/Footer";

const FooterArea: React.FC<AuthorPageProps> = (props) => {
  // @ts-ignore
  return (
    <div className="text-white mt-8">
      <div className="bg-stone-900  p-8">
        {props["footerAreaItems"] && (
          <EditableArea
            className="grid md:grid-cols-3 gap-4 md:gap-4"
            key="Area"
            parentTemplateId={props.metadata["mgnl:template"]}
            content={props["footerAreaItems"]}
          />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FooterArea;

//TODO: EditableArea - Add properties to TS-file
