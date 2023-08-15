import { ChangeEvent, useState } from "react"

interface CSVInputProps {
    onChangeCSV: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function CSVInput({ onChangeCSV }: CSVInputProps) {
    const [fileName, setFileName] = useState('');

    const handleFileName = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            onChangeCSV(e);        
            setFileName(e.target.files[0].name);            
        }
    }

    return <>
        <label htmlFor="csv-file" className="csv-input-file">{fileName ? fileName : 'Choose a CSV file'}</label>
        <input type="file" name="csv-file" id="csv-file" accept=".csv" onChange={(e) => handleFileName(e)} />
    </>
}
