import "./App.css";
import React from "react";
import { useEffect } from "react";
import HeaderText from "./components/HeaderText";
import NewsItem from "./components/NewsItem";

function App() {
	const allNews = [
		{
			id: 1,
			title:
				"Wisconsin Democratic election official: Don't water Trump's 'plant of baloney'",
			body:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum odio accusantium numquam fugiat incidunt, ut nulla a recusandae eum quasi earum. Perferendis officia neque quam dicta, vel a quasi Quam harum dolore officia voluptates minus, tenetur asperiores id ullam repellat impedit vero est quod possimus aspernatur dolorem cupiditate cumque debitis laboriosam! Deserunt accusamus asperiores, nemo tenetur sequi illo repellat?",
			color: "blue",
		},
		{
			id: 2,
			title:
				"Current and former Trump officials quietly reach out to Bidem team",
			body:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum odio accusantium numquam fugiat incidunt, ut nulla a recusandae eum quasi earum. Perferendis officia neque quam dicta, vel a quasi Quam harum dolore officia voluptates minus, tenetur asperiores id ullam repellat impedit vero est quod possimus aspernatur dolorem cupiditate cumque debitis laboriosam! Deserunt accusamus asperiores, nemo tenetur sequi illo repellat?",
			color: "black",
		},
		{
			id: 3,
			title: "Republicans need to decide whether they believe in democracy",
			body:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum odio accusantium numquam fugiat incidunt, ut nulla a recusandae eum quasi earum. Perferendis officia neque quam dicta, vel a quasi Quam harum dolore officia voluptates minus, tenetur asperiores id ullam repellat impedit vero est quod possimus aspernatur dolorem cupiditate cumque debitis laboriosam! Deserunt accusamus asperiores, nemo tenetur sequi illo repellat?",
			color: "red",
		},
		{
			id: 4,
			title: "Republicans need to decide whether they believe in democracy",
			body:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum odio accusantium numquam fugiat incidunt, ut nulla a recusandae eum quasi earum. Perferendis officia neque quam dicta, vel a quasi Quam harum dolore officia voluptates minus, tenetur asperiores id ullam repellat impedit vero est quod possimus aspernatur dolorem cupiditate cumque debitis laboriosam! Deserunt accusamus asperiores, nemo tenetur sequi illo repellat?",
			color: "green",
		},
	];

	// const clickHandler = (e) => {
	//   e.target.
	// };
	return (
		<div className="App">
			<div className="newsHeader">
				<HeaderText />
			</div>

			<div className="newsBody">
				{allNews.map((news) => (
					<NewsItem key={news.id} news={news} />
				))}
			</div>
		</div>
	);
}

export default App;
