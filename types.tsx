export type Navigation = {
    navigate: (scene: string) => void;
  };
  
  export type NavigationWithData={
    navigate:(screen:string,data:any)=>void;
  }