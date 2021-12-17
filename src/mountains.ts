export interface Mountain {
    name: string;
    height: number;
  }
  
  let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
  ];
  
  // console.log(mountains)
  
  export function findNameOfTallestMountain(mountain: Mountain[]): string {
    let maxHeight: number = 0;
    let name: string = "";
    mountain.forEach((element: any) => {
      if (element.height > maxHeight) {
        maxHeight = element.height;
        name = element.name;
      }
    });
   return name;
  }
  
  let tallestMountain: string = findNameOfTallestMountain(mountains)
  console.log(tallestMountain);