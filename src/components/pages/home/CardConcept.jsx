import React, { useState, useEffect, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Airtable from 'airtable';
import { marked } from 'marked';
import ModalCardConcept from "./ModalCardConcept";
import SkeletonCard from "./SkeletonCard";

function CardConcept({ searchTerm }) {
	const [records, setRecords] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [visibleRecords, setVisibleRecords] = useState(18); // Number of initially visible records
	const loaderRef = useRef(null);

	useEffect(() => {
		const base = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_ROOKIEPEDIA_BASEID);

		base(process.env.REACT_APP_ROOKIEPEDIA_TABLENAME)
			.select({
				// Add any necessary filters, sorting options, or other parameters here
				sort: [{ field: "cardtitle" }]
			})
			.eachPage((records, fetchNextPage) => {
				setRecords(records);
				setIsLoading(false); // Set isLoading to false when data fetching is completed
				fetchNextPage();
			}, (err) => {
				if (err) {
					console.error('Error retrieving records:', err);
				}
			});
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(handleObserver, {
			root: null,
			rootMargin: "20% 0px", // Trigger when target is within 20% of the viewport
			threshold: 0.1 // Trigger when target is at least 10% visible
		});

		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}

		return () => {
			if (loaderRef.current) {
				observer.unobserve(loaderRef.current);
			}
		};
	}, [records]);

	const handleObserver = (entries) => {
		const target = entries[0];
		if (target.isIntersecting) {
			setVisibleRecords(prevVisibleRecords => prevVisibleRecords + 18); // Increase visible records by 18 when loader is intersecting
		}
	};

	const filteredRecords = records.filter((record) => {
		const { cardheader, cardtitle, description } = record.fields;
		const searchString = `${cardheader.toLowerCase()} ${cardtitle.toLowerCase()} ${description.toLowerCase()}`;
		return searchString.includes(searchTerm.toLowerCase());
	});

	return (
		<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-4 gy-5">
			{isLoading ? (
				// Render skeleton components while loading
				<>
					<SkeletonCard />
				</>
			) : (
				filteredRecords.slice(0, visibleRecords).length > 0 ? (
					filteredRecords.slice(0, visibleRecords).map((record) => (
						<div className="col" key={record.id}>
							<div className="card mb-4 zoomcard fadeincard bgcardnfl h-100">
								<Tooltip
									title="Término en inglés"
									placement="top-start"
									TransitionComponent={Zoom}
								>
									<div className="card-header">{record.fields.cardheader}</div>
								</Tooltip>
								<div className="card-body">
									<h5 className="card-title"><strong>{record.fields.cardtitle}</strong></h5>
									<div className="card-text cardtextnfl" dangerouslySetInnerHTML={{ __html: marked(record.fields.description.substring(0, 80) + "...") }}></div>
									<ModalCardConcept cardTitle={record.fields.cardtitle} description={record.fields.description} />
								</div>
							</div>
						</div>
					))
				) : (
						<div className="mx-auto">
							<div className="alert alert-light fadeincard bgcardnfl text-center text-secondary">
								<p className="mt-4">¡Ups! Pase incompleto que no encontró a su receptor.</p>
								<p className="mb-4">¡Vamos a intentarlo de nuevo! ¡Lanza otro pase de búsqueda 🏈! </p>
							</div>
						</div>
				)
			)}
			{filteredRecords.length > 0 && (
				<div ref={loaderRef} style={{ height: "10px" }}>
					{/* Loader for lazy loading */}
				</div>
			)}
		</div>
	);
}

export default CardConcept;
