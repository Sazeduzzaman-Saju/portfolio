import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const EducationEdit = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="modal-content rounded-0">
      <div className="modal-header p-3 bg-dark text-white rounded-0">
        <h5 className="modal-title" id="projectModalLabel">
          Education Edit Form
        </h5>
        <button
          type="button"
          className="btn-close" style={{color : "white"}}
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <div className="row">
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="exampleInputEmail1"
                // name="project_title"
                placeholder="E.g: Brothers It"
                aria-describedby="emailHelp"
                {...register("company_name", { required: true })}
              />
              {errors.company_name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="E.g: Fronted, Banckend"
                id="exampleInputEmail1"
                // name="projectImage"
                aria-describedby="emailHelp"
                {...register("designation", { required: true })}
              />
              {errors.designation && (
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
                Job Description
              </label>
              <textarea
                className="form-control form-control-sm"
                // name="project_description"
                placeholder="E.g: There is the job Description"
                id="exampleInputPassword1"
                cols="30"
                rows="4"
                {...register("job_description", { required: true })}
              ></textarea>
              {errors.job_description && (
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

export default EducationEdit;
