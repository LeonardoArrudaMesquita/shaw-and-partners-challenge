type CardProps = {
  data: any;
};

export default function Card({ data }: CardProps) {
  const shapedData = Object.entries(data);

  return (
    <div>
      {shapedData.map(([key, value]) => (
        <p>
          <strong>{key}: </strong>
          <label>{value as string}</label>
        </p>
      ))}
    </div>
  );
}
