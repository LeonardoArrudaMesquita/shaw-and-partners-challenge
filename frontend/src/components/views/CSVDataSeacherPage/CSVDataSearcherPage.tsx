export default function CSVDataSeacherPage() {
    return <div>
        <p>CSV Data Seacher</p>
        <input type="file" accept=".csv" onChange={(name) => console.log(name)} />
    </div>
}