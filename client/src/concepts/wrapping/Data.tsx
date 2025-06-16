import Wrapper from './Wrapper';

const Data  = ({ injectedProps }:any) => {
  return (
    <div>
      <h3>Data Injected Component</h3>
      <p>Data: {injectedProps.data.join(', ')}</p>
      <p>Details: {injectedProps.getDetails().join(', ')}</p>
    </div>
  );
};

// const WrappedData = Wrapper({ Component: Data });
const WrappedData = Wrapper(Data);

export default WrappedData;
