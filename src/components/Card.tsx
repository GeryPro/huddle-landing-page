import React from 'react';
import { ContentItem } from '../content';

type Props = {
	key: number;
	item: ContentItem;
};

const Card: React.FC<Props> = ({ item }) => {
	const { id, title, body, image } = item;
	return (
		<div>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={`./images/${image}`} alt={title} />
			</div>
		</div>
	);
};

export default Card;
