import React, { useState, useEffect } from "react";

export default function Slide(props) {
	const { title, media, cta, heading, position, status } = props;

	return (
		<div
			className={`${status} ${position}`}
			style={{
				backgroundImage: `url(${media.desktop})`,
			}}
		>
			<div className={"slideContent"}>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<p className='heading'>{heading}</p>
				{cta.map((element, index) => {
					return (
						<a
							className='buttonLink'
							href={element.url}
							target='_blank'
							key={index}
						>
							{element.label.toUpperCase()}
						</a>
					);
				})}
			</div>
		</div>
	);
}
