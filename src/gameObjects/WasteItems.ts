export interface WasteItem {
  name: string;
  image: string;
  typeOfWaste?: string;
  acceptedBins: [];
  errorMessage: string;
}
