const Job = ({ className, title, contractType, country, city }) => {
  const details = `${contractType} - ${country} - ${city}`;

  return (
    <div className={"job " + className}>
      <h3>{title}</h3>
      <p>{details}</p>
    </div>
  );
};

export default Job