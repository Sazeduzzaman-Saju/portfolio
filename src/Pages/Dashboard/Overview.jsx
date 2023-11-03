import { useQuery } from "@tanstack/react-query";

const Overview = () => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("https://portfolio-server-osbt6h8tz-sazeduzzzaman.vercel.app/projects");
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
    <div className="container relative">
    {projects.length}
      <div className="row">
        <div className="col-md-12 text-center wow fadeInUp">
          <h2>Dashboard</h2>
          <div className="space-border" />
        </div>
        <div className="col-md-12 wow fadeInUp">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Total Project</div>
                <div className="card-body">{projects.length}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Total Blogs</div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Total Contact</div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
