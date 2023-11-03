import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllContact = () => {
  const {
    data: contacts,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await fetch("https://portfolio-server-osbt6h8tz-sazeduzzzaman.vercel.app/contacts");
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
  const handleRemove = (contact) => {
    console.log("deleted id",contact);
    fetch(`https://portfolio-server-osbt6h8tz-sazeduzzzaman.vercel.app/contacts/${contact._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("educations Post Deleted");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container relative">
      <div className="row">
        <div className="col-md-12 text-center wow fadeInUp">
          <h2>All Contact</h2>
          <div className="space-border" />
        </div>
        <div className="col-md-12 wow fadeInUp">
          <div className="card">
            <div className="card-header">
              <div className="d-flex">
                <p className="p-0 m-0">All Contact Table</p>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" width={"5%"}>
                        #
                      </th>
                      <th scope="col" width={"15%"}>
                        Sender Name
                      </th>
                      <th scope="col" width={"20%"}>
                        Sender Email
                      </th>
                      <th scope="col" width={"20%"}>
                        Sender Phone Number
                      </th>
                      <th scope="col" width={"25%"}>
                        Sender Message
                      </th>
                      <th scope="col" width={"15%"} className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{contact.sender_name}</td>
                        <td>{contact.sender_email}</td>
                        <td>{contact.sender_phone}</td>
                        <td>
                          {contact.sender_message && contact.sender_message.slice(0, 10)}
                        </td>
                        <th scope="row" className="text-center">
                          <div className="">
                            <a
                              href="javascript:void();"
                              onClick={() => handleRemove(contact)}
                              className="text-danger action_icon_color"
                              data-wow-delay=".6s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.6s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <i className="fa-solid fa-dumpster"></i>
                            </a>
                          </div>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContact;
