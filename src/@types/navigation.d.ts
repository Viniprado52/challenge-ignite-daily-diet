export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      create: undefined;
      edit: {
        id: string;
      };
      created: {
        type: string;
      };
      detail: {
        id: string;
      };
      statistic: {
        percent: number;
      }
    }
  }
}