
export interface ListingImageData {
  url: string;
  alt: string;
}

// AspectRatio options supported by the Veo video generation API
export enum AspectRatio {
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16'
}

// State interface for tracking the lifecycle of a Veo video generation request
export interface VeoGenerationState {
  isGenerating: boolean;
  progressMessage: string;
  error?: string;
  videoUrl?: string;
}
