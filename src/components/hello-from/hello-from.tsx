export type HelloFromProps = {
  source: string;
};

export const HelloFrom = ({ source }: HelloFromProps) => {
  return <p>{`Hello from ${source}!`}</p>;
};
