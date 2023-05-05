export type User = {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  onFollowersPress: () => void;
  location: string;
  email: string;
};

export interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
