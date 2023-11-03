/* eslint-disable react/prop-types */
const ExperienceTable = ({ exp, index ,handleRemove }) => {
    const {company_name,designation}=exp;
    console.log(exp)

  return (
    <>
      <tr key={exp._id}>
        <th scope="row">{index + 1}</th>
        <td>{company_name}</td>
        <td>
          <span className="text-muted">{designation}</span>
        </td>
        <td>
          {" "}
          <span className="text-info">2023</span>
        </td>
        <td>
          <span className="text-info">2023</span>
        </td>
        <th scope="row">
          <div className="">
            <a
              href="javascript:void();"
              className="text-muted me-3 action_icon_color"
              data-wow-delay=".6s"
              data-bs-toggle="modal"
              data-bs-target="#ExperienceEdit"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </a>
            <a
              href="javascript:void();"
              onClick={() => handleRemove(exp._id)}
              className="text-muted action_icon_color"
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
    </>
  );
};

export default ExperienceTable;
