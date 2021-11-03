import React from 'react';
import { ContentItem } from '../content';
import { StyledCard } from './styles/Card.styles';

type Props = {
	key: number;
	item: ContentItem;
};

const Card: React.FC<Props> = ({ item }) => {
	const { id, title, body, image } = item;
	return (
		<StyledCard layout={id % 2 === 0 ? 'row-reverse' : 'row'}>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={`./images/${image}`} alt={title} />
			</div>
		</StyledCard>
	);
};

export default Card;
