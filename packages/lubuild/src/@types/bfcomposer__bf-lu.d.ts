declare module '@bfcomposer/bf-lu/lib/parser' {
  export namespace parser {
    function parseFile(fileContent: any, log: any, locale: any): any;
    function validateLUISBlob(LUISJSONBlob: any): any;
  }
}