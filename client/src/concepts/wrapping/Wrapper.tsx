
const Wrapper = ( Component : any) => {
// const Wrapper = ({ Component }: any) => {
  const injectedProps = {
    data: ['a', 'b', 'c'],
    getDetails: function () {
      return this.data;
    },
  };
  
  return (args: any) => {
    return <Component {...args} injectedProps={injectedProps} />;
  };
};

export default Wrapper;