export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  PhotoDetails: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
};

export type Album = {
  albumId: number,
  id: number,
  title: string, 
  url: string,
  thumbnailUrl: string
}

export type Photo = {
  albumId: number,
  id: number,
  title: string, 
  url: string,
  thumbnailUrl: string
}