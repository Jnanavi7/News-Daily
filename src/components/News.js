import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  console.log(props.apiKey)
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async (pageNum) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dd2987f4d385485dbfe45014caf7a780&page=${pageNum}&pageSize=${props.pageSize}`;    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    let arrayData = parsedData.articles;
    const filteredData = arrayData.map((item) => {
      const filteredItem = Object.fromEntries(
        Object.entries(item).filter(([_, v]) => v !== null)
      );
      return filteredItem;
    });
    setArticles(filteredData);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(pageNum);
  };

  const handleNextClick = async () => {
    const nextPage = page + 1;
    updateNews(nextPage);
  };

  const handlePrevClick = async () => {
    const prevPage = page - 1;
    if (prevPage > 0) {
      updateNews(prevPage);
    }
  };

  useEffect(() => {
    updateNews(page);
  }, [page]);

  return (
    <div className="container my-3">
      <h2 className="textcenter">Top Headlines</h2>
      {loading && <Spinner />}

      <div className="row">
        {!loading &&
          articles?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={ element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>

      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          onClick={handlePrevClick}
          className="btn btn-dark"
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          onClick={handleNextClick}
          className="btn btn-dark"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "technology",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
