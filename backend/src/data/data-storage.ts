type CSVRow = Record<string, string>

let uploadedCSVData: CSVRow[] = []

export function setCSVData (data: CSVRow[]): void {
  uploadedCSVData = data
}

export function getCSVData (): CSVRow[] {
  return uploadedCSVData
}
