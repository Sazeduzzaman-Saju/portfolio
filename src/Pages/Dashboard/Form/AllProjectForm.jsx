import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const AllProjectForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="modal-content rounded-0">
      <div className="modal-header p-3">
        <h5 className="modal-title" id="projectModalLabel">
          Project Add Form
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form>
        <div className="modal-body">
          <div className="row">
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Project Date
              </label>
              <input
                type="date"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                name="project_date"
                aria-describedby="emailHelp"
                {...register("project_date", { required: true })}
              />
              {errors.project_date && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Project Title
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                name="project_title"
                placeholder="E.g: Sport Bangla News Paper"
                aria-describedby="emailHelp"
                {...register("project_title", { required: true })}
              />
              {errors.project_title && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Project Live Link
              </label>
              <input
                type="url"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                name="project_live_link"
                placeholder="E.g: https://yoursite.com/"
                aria-describedby="emailHelp"
                {...register("project_live_link", { required: true })}
              />
              {errors.project_live_link && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Project Github Repository Link
              </label>
              <input
                type="url"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                name="project_git_link"
                placeholder="E.g: https://yoursite.com/"
                aria-describedby="emailHelp"
                {...register("project_git_link", { required: true })}
              />
              {errors.project_git_link && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Select Used Technology
              </label>
              <input
                type="file"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                name="projectImage"
                aria-describedby="emailHelp"
                {...register("projectImage", { required: true })}
              />
              {errors.projectImage && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Select Used Technology
              </label>
              <Select
                isMulti
                options={options}
                name="select_tech"
                {...register("select_tech", { required: false })}
              />
              {errors.select_tech && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Project Description
              </label>
              <textarea
                className="form-control form-control-sm"
                name="project_description"
                placeholder="E.g: There is the Project Description"
                id="exampleInputPassword1"
                cols="30"
                rows="1"
                {...register("project_description", { required: true })}
              ></textarea>
              {errors.project_description && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AllProjectForm;
