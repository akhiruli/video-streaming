export class ContentDetails{
  title: string;
  format: string;
  duration: string;
  size: string;
  rating: string;
  image: string;
  file: string;
  cast: string;
  description: string;
}

export class Category{
  categoryType: string;
  description: string;
}

export class VideoCategory{
  category: Category;
  content: ContentDetails[];
}

export class ContentResponse{
  status: string;
  description: string;
  data: VideoCategory[];
}
