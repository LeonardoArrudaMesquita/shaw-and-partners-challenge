type CardProps = {
  data: any;
};

export default function Card({ data }: CardProps) {
  const shapedData = Object.entries(data);

  return (
    <div className="card" data-testid="card-container">
      {shapedData.map(([key, value], index) => (
        <p key={index}>
          <strong>{key}: </strong>
          <label>{value as string}</label>
        </p>
      ))}
    </div>
  );
}
