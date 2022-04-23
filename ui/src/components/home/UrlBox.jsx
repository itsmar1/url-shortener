import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";



const UrlBox = () => {
  const formik = useFormik({
    initialValues: {
      theUrl: "",
    },
    validationSchema: Yup.object({
      theUrl: Yup.string().url("Enter a valid URL"),
    }),
    onSubmit: async (values) => {
      console.log(values.theUrl);
      const graphqlQuery = {
        query: `
          mutation {
            shortenUrl(longUrl: "${values.theUrl}") {
              shortUrl
            }
          }
        `
      };

      const shortUrl = await axios.post('http://localhost:8080/graphql', graphqlQuery);

      console.log(shortUrl.data.data.shortenUrl.shortUrl);
      
    },
  });

  return (
    <div className="urlBox mx-auto text-center">
      <h1>Paste the URL to be shortened</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="theUrl"
            id="theUrl"
            placeholder="Enter the link here"
            value={formik.values.theUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Shorten URL
            </button>
          </div>
        </div>
        {formik.touched.theUrl && formik.errors.theUrl && (
          <div className="text-start mt-2 text-sm text-danger">
            {formik.errors.theUrl}
          </div>
        )}
      </form>
      <div className="parag text-center mx-auto">
        <p className="first-p">Short URL is a free tool to shorten a URL or reduce a link</p>
        <p>
            Use our URL Shortener to create a shortened link making it easy to
            remember
        </p>
      </div>
    </div>
  );
};

export default UrlBox;
