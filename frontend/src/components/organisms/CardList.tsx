import Card from "../molecule/Card";

interface CardListProps {
    cards: any
}

export default function CardList({ cards }: CardListProps) {
    return (
        <div className="card-list-container">
            {cards.map((card: any, index: number) => <Card data={card} key={index}/>)}
        </div>
    );
}