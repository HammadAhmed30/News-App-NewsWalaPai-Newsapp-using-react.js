import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {
  const [articless, setArticles] = useState([
    {
      source: { id: "cnn", name: "CNN" },
      author: "Reuters",
      title:
        "Death toll rises to 23 after landslide near campsite in Malaysia - CNN",
      description:
        "The number of people killed in a landslide Friday near the Malaysian capital has risen to 23, while 10 people are still missing, Malaysia's state media agency Bernama reported Saturday.",
      url: "https://www.cnn.com/2022/12/15/asia/malaysia-landslide-deaths-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221216101322-05-malaysia-landslide-121622.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-17T11:14:00Z",
      content:
        "The number of people killed in a landslide Friday near the Malaysian capital has risen to 23, while 10 people are still missing, Malaysias state media agency Bernama reported Saturday.\r\nThe authoriti… [+3180 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "In COVID-hit Beijing, funeral homes with sick workers struggle to keep up - Reuters",
      description:
        "Hearses bearing the dead lined the driveway to a designated COVID-19 crematorium in the Chinese capital on Saturday while workers at the city's dozen funeral homes were busier than normal, days after China reversed tight pandemic restrictions.",
      url: "https://www.reuters.com/world/china/mainland-china-reports-2286-new-covid-19-cases-vs-2157-day-earlier-2022-12-17/",
      urlToImage:
        "https://www.reuters.com/resizer/RNxIbG3b50kT6lfg7wStUkwq6Ig=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UIYW6QEGPBNO5KJHRZ3ERB4JHY.jpg",
      publishedAt: "2022-12-17T09:24:00Z",
      content:
        "BEIJING/SHANGHAI, Dec 17 (Reuters) - Hearses bearing the dead lined the driveway to a designated COVID-19 crematorium in the Chinese capital on Saturday while workers at the city's dozen funeral home… [+5451 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Niha Masih",
      title:
        "Highland Park shooting suspect's father charged with reckless conduct - The Washington Post",
      description:
        "Prosecutors said Robert Crimo Jr. took an “unjustified risk” in signing his son’s gun ownership application in 2019.",
      url: "https://www.washingtonpost.com/nation/2022/12/17/highland-park-shooting-father-crimo-charged/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JJ42UWURQL5SRDT2P4QNL4N764.JPG&w=1440",
      publishedAt: "2022-12-17T08:17:00Z",
      content:
        "Comment on this story\r\nProsecutors in Illinois announced felony charges Friday against the father of the man accused of killing seven people and injuring more than 40 during a Fourth of July parade i… [+2829 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Michael Cox, Mark Carey",
      title:
        "World Cup final tactical preview: Messi loves to exploit the exact spaces Mbappe leaves open - The Athletic",
      description:
        "If Mbappe continues to remain high up in the World Cup final, France risk Theo Hernandez being isolated, and Messi will be lurking...",
      url: "https://theathletic.com/4008143/2022/12/16/world-cup-final-messi-mbappe-argentina-france-tactics/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2022/12/16123201/Messi_MbappeHeader-1024x683.jpg",
      publishedAt: "2022-12-17T07:11:21Z",
      content:
        "Four years ago, France defeated Argentina 4-3 in a genuine epic of a World Cup second-round game. It was the day Kylian Mbappe transformed from a future great into one of the worlds best his stunning… [+7035 chars]",
    },
  ]);
  const [pageNum, setPageNum] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  document.title = props.titleName + " | News Wala Pai";
  useEffect(() => {
    return async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${pageNum}&apiKey=dc593b9f9a584121a6c9362230c8d1bd&page=1&pageSize=${props.pageSize}`;

      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setArticles(data.articles);
      setTotalResult(data.totalResults);
    };
  }, []);
  const fetchData = async () => {
    setPageNum(pageNum + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${pageNum}&apiKey=dc593b9f9a584121a6c9362230c8d1bd&page=1&pageSize=${props.pageSize}`;

    let res = await fetch(url);
    let data = await res.json();
    setArticles(articless.concat(data.articles));
  };
  return (
    <div>
      <style jsx="true">
        {`
          .main-heading {
            position: relative;
            font-size: 2.9em;
            display: inline-block;
            line-height: 1.2em;
            color: #303030;
            margin-top: -10px;
            letter-spacing: 2px;
            margin-bottom: 22px;
          }
          .main-heading-title {
            position: relative;
            font-size: 1.9em;
            display: inline-block;
            color: #4d4d4d;
            line-height: 0px;
            letter-spacing: 2px;
            margin-bottom: 22px;
          }
          .main-heading::after {
            position: absolute;
            content: "";
            width: 70%;
            height: 90%;
            border-bottom: 5px solid #4d4d4d;
            left: 0;
            top: 0;
          }
        `}
      </style>
      <h2 className="main-heading-title">{props.titleName}</h2>
      <br />
      <h1 className="main-heading">HEADLINES</h1>
      <div>
        <h1
          style={{
            marginTop: "2em",
            textAlign: "center",
            marginBottom: "2em",
            fontSize: "1.3em",
            color: "gray",
            fontWeight: "400",
          }}
        >
          Note : newsAPI.org does not allow to use API other than localhost.{" "}
          <br />
          So enjoy static data.
        </h1>
        <InfiniteScroll
          dataLength={articless.length} //This is important field to render the next data
          next={() => {
            fetchData();
          }}
          hasMore={articless.length < totalResult}
          loader={<h4 className="text-center">...</h4>}
        >
          {articless.map((article, index) => {
            return (
              <NewsItems
                key={index}
                desc={article.description}
                title={article.title}
                writter={article.author}
                publishAt={article.publishedAt}
                ImageUrl={article.urlToImage}
                linkToBlog={article.url}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
