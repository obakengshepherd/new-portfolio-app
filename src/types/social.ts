import { BaseEntity } from "./common";

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "twitter"
  | "email"
  | "dribbble"
  | "behance"
  | "codepen";

export interface Social extends BaseEntity {
  platform: SocialPlatform;
  url: string;
  label: string;
  icon: string;
  order?: number;
}
