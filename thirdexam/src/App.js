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
			body: `MADISON. Wis. - The Wisconsin Elections Commission late Wednesday after an hour long often-contentious debate agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a proforma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. "It's just remarkable the six of us in a civilized fashion can't agree to this stuff"; Democratic commissioner Mark Thomsen said hours into the debate.`,
			color: "blue",
		},
		{
			id: 2,
			title:
				"Current and former Trump officials quietly reach out to Bidem team",
			body: `MADISON. Wis. - The Wisconsin Elections Commission late Wednesday after an hour long often-contentious debate agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a proforma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. "It's just remarkable the six of us in a civilized fashion can't agree to this stuff"; Democratic commissioner Mark Thomsen said hours into the debate.`,
			color: "black",
		},
		{
			id: 3,
			title: "Republicans need to decide whether they believe in democracy",
			body: `MADISON. Wis. - The Wisconsin Elections Commission late Wednesday after an hour long often-contentious debate agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a proforma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. "It's just remarkable the six of us in a civilized fashion can't agree to this stuff"; Democratic commissioner Mark Thomsen said hours into the debate.`,
			color: "red",
		},
		{
			id: 4,
			title: "Republicans need to decide whether they believe in democracy",
			body: `MADISON. Wis. - The Wisconsin Elections Commission late Wednesday after an hour long often-contentious debate agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a proforma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. "It's just remarkable the six of us in a civilized fashion can't agree to this stuff"; Democratic commissioner Mark Thomsen said hours into the debate.`,
			color: "green",
		},
	];

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
