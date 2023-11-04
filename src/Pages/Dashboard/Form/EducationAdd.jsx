import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EducationAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const {
      institute_name,
      subject,
      start_date,
      end_date,
      education_description,
    } = data;
    const educationsItems = {
      institute_name,
      subject,
      start_date,
      end_date,
      education_description,
    };
    axios
      .post("http://localhost:5000/educations", educationsItems)
      .then((data) => {
        toast.success("Project Added Successfully");
        console.log("After Posting 1 Project", data);
        // reset the form
        reset();
      });
  };
  return (
    <div className="modal-content rounded-0">
      <div className="modal-header p-3 bg-dark text-white rounded-0">
        <h5 className="modal-title" id="projectModalLabel">
          Education Add Form
        </h5>
        <button
          type="button"
          className="btn-close"
          style={{ color: "white" }}
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <div className="row">
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Institute Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                // name="project_title"
                placeholder="E.g: Sport Bangla News Paper"
                aria-describedby="emailHelp"
                {...register("institute_name", { required: true })}
              />
              {errors.institute_name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="E.g: Science, Computer"
                id="exampleInputEmail1"
                // name="projectImage"
                aria-describedby="emailHelp"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                // name="project_live_link"
                placeholder="E.g: https://yoursite.com/"
                aria-describedby="emailHelp"
                {...register("start_date", { required: true })}
              />
              {errors.start_date && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                // name="project_live_link"
                placeholder="E.g: https://yoursite.com/"
                aria-describedby="emailHelp"
                {...register("end_date", { required: true })}
              />
              {errors.end_date && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Education Description
              </label>
              <textarea
                className="form-control form-control-sm"
                // name="project_description"
                placeholder="E.g: There is the Project Description"
                id="exampleInputPassword1"
                cols="30"
                rows="4"
                {...register("education_description", { required: true })}
              ></textarea>
              {errors.education_description && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-lg-12">
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationAdd;
