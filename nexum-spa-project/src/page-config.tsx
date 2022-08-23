// add components mappings in here


import { Homepage } from "@/components/homepage/Homepage";
import { Headline } from "@/components/common/Headline";



export const config = {
  componentMappings: {
    //components
    'nexum-core-templating:components/common/headline': Headline as React.FC,
    
   


    // pages
    
   
    "nexum-core-templating:pages/home": Homepage as React.FC
  },
};
