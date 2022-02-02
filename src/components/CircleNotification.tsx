

export function CircleNotification({...props}) {
  return (
    <div className="d-flex justify-content-center align-items-center bg-danger text-white rounded-circle text-center position-absolute" style={{width:"25px", height:"25px", left:"50%", top:"50%"}}>
    <span>{props.productCount}</span>
  </div>
  );
}
