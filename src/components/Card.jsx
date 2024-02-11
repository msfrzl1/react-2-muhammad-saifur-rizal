const Card = ({ title, description }) => {
  return (
    <>
      <div className="card">
        <div className="container-card">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
