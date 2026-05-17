// TypeScript infers JSX.Element
// this will trigger error
export default function Component(): React.JSX.Element | null | string {
  return null;
  return "hello";
  return <h2>hello from typescript</h2>;
}
