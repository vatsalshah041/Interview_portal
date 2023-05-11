import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import Loader from "./Loader";

const ResourcesData = (props) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([
		{
			id: "",
			name: "",
			resources: "",
		},
	]);
	useEffect(() => {
		var config = {
			method: "get",
			url: "https://devacc3.pythonanywhere.com/accounts/resources/",
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		axios(config)
			.then(function (response) {
				setData(response.data.filter((item) => item.name === props.stack));
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const handleIframeLoad = () => {
		setLoading(false);
	  };

	return (
		<>
			<Grid>	
			{loading && <Loader />}
				{data?<>
					{data.map((item, i) => (
					<React.Fragment key={i}>
						{/* <span>{item.name === props.stack ? item.name : ""}</span> */}
						<iframe
						onLoad={handleIframeLoad}
							src={item.name === props.stack ? item.resources :""}
							width="100%"
							height="1000px"
							// style={{ display: loading ? "none" : "block" }}
						/>
					</React.Fragment>
				))}
				</>:<>
				<Loader></Loader>
				</>}
				
			</Grid>
		</>
	);
};

export default ResourcesData;
