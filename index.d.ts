declare module '@apiverve/sunposition' {
  export interface sunpositionOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface sunpositionResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class sunpositionWrapper {
    constructor(options: sunpositionOptions);

    execute(callback: (error: any, data: sunpositionResponse | null) => void): Promise<sunpositionResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sunpositionResponse | null) => void): Promise<sunpositionResponse>;
    execute(query?: Record<string, any>): Promise<sunpositionResponse>;
  }
}
