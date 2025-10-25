
const Wrapper = ( Component : any) => {
// const Wrapper = ({ Component }: any) => {
  const injectedProps = {
    data: ['a', 'b', 'c'],
    getDetails: function () {
      return this.data;
    },
  };
  
  return (args: any) => {

    if(args?.loading) return <h2>Loading...</h2>

    return <Component {...args} injectedProps={injectedProps} />;
  };
};

export default Wrapper;