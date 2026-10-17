export interface MaterialSpec {
  id: string;
  code: string;
  name: string;
  source: string;
  sourceLocation: string;
  application: string;
  finish: string;
  description: string;
  imageUrl: string;
  astmStandard?: string;
  thermalConductivity?: string;
  density?: string;
  maintenance: string;
  provenanceNote: string;
}

export interface BlueprintZone {
  id: string;
  name: string;
  dimensions: string;
  daylightFactor: string;
  materiality: string;
  description: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FloorLevel {
  id: string;
  label: string;
  name: string;
  elevation: string;
  area: string;
  daylightFactor: string;
  acousticRating: string;
  description: string;
  zones: BlueprintZone[];
}

export interface RoomPlate {
  id: string;
  plateNumber: string;
  plateTitle: string;
  spaceName: string;
  description: string;
  finishedImageUrl: string;
  demolitionImageUrl: string;
  fittings: string;
  surfaces: string;
  luminaires?: string;
  alt: string;
}

export interface Accolade {
  publication: string;
  quote: string;
  issue: string;
  awardCategory?: string;
}
