interface Props {
  loading: boolean;
  skeleton: React.ReactNode;
  children: React.ReactNode; 
}

export const SkeletonWrapper = ({ loading, skeleton, children }: Props) => {
  return loading ? skeleton : children;
}