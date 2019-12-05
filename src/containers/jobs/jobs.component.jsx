import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchJob from "../../components/search-job/search-job.component";
import Header from "../../components/header/header.component";
import JobList from "../../components/job-listing/job-listing.component";
import ReactPaginate from "react-paginate";
import WithSpinner from "../../components/withSpinner/withSpinner.component";

const WithSpinnerJobList = WithSpinner(JobList);

const JobsPage = () => {
  const [state, setState] = useState({
    jobs: [],
    query: "",
    currentPage: 1,
    totalPages: 0,
    isLoading: false
  });

  const { query, currentPage, totalPages, jobs, isLoading } = state;
  useEffect(() => {
    setState(state => ({ ...state, isLoading: true }));
    const getJobs = async () => {
      try {
        let url = query
          ? `https://api.joblocal.de/v4/jobs?filter.domain=45&fields.job=${query}&page.number	
  =${currentPage}`
          : `https://api.joblocal.de/v4/jobs?filter.domain=45&page.number=${currentPage}`;
        let { data } = await Axios.get(url);
        let { data: jobs, meta } = data;
        let totalPages = meta.pagination.total_pages;
        setState(state => ({ ...state, jobs, totalPages, isLoading: false }));
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, [query, currentPage]);

  const onPageChange = e => {
    setState({ ...state, currentPage: e.selected + 1 });
  };

  const SubmitHandler = e => {
    e.preventDefault();
  };

  const queryChangeHandler = e => {
    let query = e.target.value;
    setState({ ...state, query });
  };

  return (
    <React.Fragment>
      <Header title="Job Local" />
      <main className="container">
        <SearchJob
          query={query}
          onChange={queryChangeHandler}
          onSubmit={SubmitHandler}
        />
        <ReactPaginate
          pageCount={totalPages}
          containerClassName={"pagination justify-content-end"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          activeClassName={"active"}
          onPageChange={onPageChange}
        />
        <WithSpinnerJobList jobs={jobs} isLoading={isLoading} />
      </main>
    </React.Fragment>
  );
};

export default JobsPage;
