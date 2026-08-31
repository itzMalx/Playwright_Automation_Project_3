import * as XLSX from "xlsx";
import * as path from "path";

export class ExcelReader {

    static getRow(
        fileName: string,
        sheetName: string,
        testCase: string
    ) {

        const filePath = path.resolve(
            __dirname,
            "../test-data",
            fileName
        );
import * as XLSX from 'xlsx';

export class ExcelReader {

    static getData(filePath: string, sheetName: string): Record<string, string>[] {

        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error(
                `Sheet "${sheetName}" not found in ${fileName}`
            );
        }

        const data = XLSX.utils.sheet_to_json<any>(worksheet);

        const row = data.find(
            (item) => String(item.TestCase).trim() === testCase.trim()
        );

        if (!row) {
            throw new Error(
                `Test case "${testCase}" not found in ${fileName}`
            );
        }

        return row;
            throw new Error(`Sheet "${sheetName}" not found in Excel file`);
        }

        const data = XLSX.utils.sheet_to_json<Record<string, string>>(worksheet, {
            defval: ''
        });

        return data;
    }
}