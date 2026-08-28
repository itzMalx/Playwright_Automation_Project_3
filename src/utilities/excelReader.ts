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
    }
}