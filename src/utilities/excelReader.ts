import * as XLSX from 'xlsx';

export class ExcelReader {

    static getData(filePath: string, sheetName: string): Record<string, string>[] {

        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error(`Sheet "${sheetName}" not found in Excel file`);
        }

        const data = XLSX.utils.sheet_to_json<Record<string, string>>(worksheet, {
            defval: ''
        });

        return data;
    }
}