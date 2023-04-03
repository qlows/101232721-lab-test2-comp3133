export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    links: {
      mission_patch: string;
      mission_patch_small: string;
    };
  }
  