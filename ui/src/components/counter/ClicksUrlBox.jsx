import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import TheSpinner from "../../layout/TheSpinner";
import * as Yup from "yup";

const ClicksUrlBox = () => {
  const [loading, setLoading] = useState(false);
  const [clicks, setClicks] = useState(null);
  const [errors, setErrors] = useState(null);

  const formik = useFormik({
    initialValues: {
      theUrl: "",
    },
    validationSchema: Yup.object({
      theUrl: Yup.string().url("Enter a valid URL"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const shortenedUrl = values.theUrl.split("/");
      const theId = shortenedUrl[shortenedUrl.length - 1];
      console.log(theId);
      
      const graphqlQuery = {
        query: `
            query {
                getClicks(shortUrl: "${theId}") {
                    clicks
                }
            }
        `,
      };
      try {
        let shortUrl = await axios.post(
          "http://localhost:8080/graphql",
          graphqlQuery
        );
        shortUrl = await shortUrl.data;

        setClicks(shortUrl.data.getClicks.clicks);
        setLoading(false);
      } catch (error) {
          setLoading(false);
          setErrors(true);
        console.log(error);
      }
    },
  });

  return (
    <div className="clicks-box mx-auto">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="theUrl"
              id="theUrl"
              className="form-control"
              placeholder="Enter here your shortened URL"
              value={formik.values.theUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Track Clicks
              </button>
            </div>
          </div>
          {formik.touched.theUrl && formik.errors.theUrl && (
            <div className="text-start mt-2 text-sm text-danger">
              {formik.errors.theUrl}
            </div>
          )}
        </form>
      </div>
      {loading && (
        <div className="mt-4 d-flex justify-content-center">
          <TheSpinner />
        </div>
      )}
      {!loading && clicks && (
        <div className="mt-4 d-flex justify-content-center">
          <div className="clicks d-flex justify-content-center align-items-center">{clicks}</div>
        </div>
      )}
      {!loading && errors && (
        <div className="mt-4 d-flex justify-content-center">
          <div className="clicks d-flex justify-content-center align-items-center">0</div>
        </div>
      )}
    </div>
  );
};

export default ClicksUrlBox;
