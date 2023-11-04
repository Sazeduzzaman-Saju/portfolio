import { useQuery } from "@tanstack/react-query";

const Education = () => {
  const {
    data: educations,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["educations"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/educations");
      return response.json();
    },
    refetchInterval: 1000, // Auto refetch every 60 seconds (adjust the interval as needed)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Failed to fetch data</div>;
  }

  return (
    <div className="p-4">
    <h3 className="s_border">Education</h3>
    <ul className="d_timeline">
      {educations.map((edu, index) => (
        <li key={index} className="d_timeline-item">
          <h3 className="d_timeline-title">{edu.start_date} <strong className="text-black px-2"> To</strong> {edu.end_date}</h3>
          <p className="d_timeline-text">
            <span className="d_title">{edu.subject}</span>
            <span className="d_company">{edu.institute_name}</span>
            {edu.education_description}
          </p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Education;
