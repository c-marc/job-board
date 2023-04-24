import Job from "./Job"

const Jobs = ({jobs}) => {
  return (
    <div className="jobs">
      {jobs.map((job) => {
        return (
          <Job
            key={job.title}
            className={job.className}
            title={job.title}
            contractType={job.contractType}
            country={job.country}
            city={job.city}
          />
        );
      })}
    </div>
  );
};

export default Jobs