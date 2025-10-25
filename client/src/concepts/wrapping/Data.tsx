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

function WrappedData(){

  const Wrap = Wrapper(Data);
  return (
    <Wrap loading={false} />
  )
}


export default WrappedData;
