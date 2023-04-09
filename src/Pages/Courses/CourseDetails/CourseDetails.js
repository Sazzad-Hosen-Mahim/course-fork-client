import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { TbDownload } from "react-icons/tb";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./Pdf/Pdf";

const CourseDetails = () => {
  const singleCourseData = useLoaderData();
  const { title, details, author, total_view } = singleCourseData;
  console.log(singleCourseData);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="ms-5 hero-content flex-col lg:flex-row-reverse">
          <img
            src={author.img}
            className=" max-w-xl rounded-lg shadow-2xl"
            alt="course instructor"
          ></img>
          <div className="me-10">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-2xl pt-10 text-start">Author: {author.name}</p>
            <p className="py-6 text-lg text-start">{details}</p>

            <Link to="/checkout" className="btn btn-primary mx-4">
              Get Premium Access
            </Link>
            <button className="btn btn-outline hover:bg-primary">
              <TbDownload className="text-xl ms-2"></TbDownload>
              <PDFDownloadLink
                document={<Pdf></Pdf>}
                fileName="Course-Fork-Details"
              >
                {({ loading, error }) =>
                  loading ? "Loading Document..." : "Download"
                }
              </PDFDownloadLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
